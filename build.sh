#!/bin/bash
set -e

# 颜色输出
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

log_info() { echo -e "${GREEN}[INFO]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1" >&2; exit 1; }

# 1. 安装Node依赖
log_info "Installing Node dependencies..."
cd ui
npm install
npm install -g aiot-vue-cli
cd ..

# 2. 解压工具链
TOOLCHAIN_ARCHIVE="toolchain/armv7-eabihf--uclibc--bleeding-edge-2018.11-1.tar.bz2"
TOOLCHAIN_DIR="toolchain/armv7-eabihf--uclibc--bleeding-edge-2018.11-1"
if [ ! -d "$TOOLCHAIN_DIR" ]; then
    log_info "Extracting toolchain..."
    mkdir -p toolchain
    tar -xjf "$TOOLCHAIN_ARCHIVE" -C toolchain
fi

# 3. 设置交叉编译前缀
export CROSS_TOOLCHAIN_PREFIX="$(pwd)/$TOOLCHAIN_DIR/bin/arm-buildroot-linux-uclibcgnueabihf-"
if [ ! -f "${CROSS_TOOLCHAIN_PREFIX}gcc" ]; then
    log_error "Toolchain gcc not found at ${CROSS_TOOLCHAIN_PREFIX}gcc"
fi
log_info "Toolchain prefix: $CROSS_TOOLCHAIN_PREFIX"

# 4. 编译C++扩展
log_info "Building Shell Module..."
cd jsapi
mkdir -p build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release -DCMAKE_LINK_DEPENDS_USE_LINKER=OFF
make -j$(nproc)
cd ../..

# 5. 复制.so到ui/libs
mkdir -p ui/libs
cp jsapi/build/libjsapi_shell.so ui/libs/
log_info "Shell Module copied to ui/libs/"

# 6. 构建AMR
log_info "Building AMR..."
cd ui
npm run build:prod
cd ..

# 7. 查找生成的AMR文件并准备上传
AMR_FILE=$(find ui -maxdepth 1 -name "*.amr" -type f | head -1)
if [ -z "$AMR_FILE" ]; then
    log_error "No AMR file found in ui/ directory"
fi
log_info "Build successful! AMR file: $AMR_FILE"
echo "AMR_PATH=$AMR_FILE" >> $GITHUB_ENV   # 供 Actions 使用