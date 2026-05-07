cmake_minimum_required(VERSION 3.10)
project(libjsapi_shell)

set(MODULE_NAME "shell")
set(LIB_NAME "jsapi_${MODULE_NAME}")

if(NOT DEFINED ENV{CROSS_TOOLCHAIN_PREFIX})
    message(FATAL_ERROR "CROSS_TOOLCHAIN_PREFIX not set")
endif()
set(CMAKE_C_COMPILER "$ENV{CROSS_TOOLCHAIN_PREFIX}gcc")
set(CMAKE_CXX_COMPILER "$ENV{CROSS_TOOLCHAIN_PREFIX}g++")

set(IOT_SDK_PATH "${CMAKE_SOURCE_DIR}/iot-miniapp-sdk")
include_directories(
    ${CMAKE_SOURCE_DIR}/src
    ${IOT_SDK_PATH}/include
)

set(CMAKE_CXX_STANDARD 17)
add_compile_options(-Wall -Werror=return-type -Wno-psabi -fPIC)
add_compile_options(-Os -ffunction-sections -fdata-sections)

file(GLOB JQUTIL_SOURCES ${IOT_SDK_PATH}/src/jqutil_v2/*.cpp)
add_library(iot_sdk_lib STATIC ${JQUTIL_SOURCES})
target_compile_options(iot_sdk_lib PRIVATE -w)
target_include_directories(iot_sdk_lib PUBLIC ${IOT_SDK_PATH}/include)
set_target_properties(iot_sdk_lib PROPERTIES POSITION_INDEPENDENT_CODE ON)

set(SOURCES
    src/JSAPI.cpp
    src/Shell/JSShell.cpp
    src/Shell/Shell.cpp
)

add_library(${LIB_NAME} SHARED ${SOURCES})
target_link_libraries(${LIB_NAME} PRIVATE iot_sdk_lib dl pthread)
target_link_options(${LIB_NAME} PRIVATE -Wl,--gc-sections -s)

set_target_properties(${LIB_NAME} PROPERTIES
    PREFIX "lib"
    SUFFIX ".so"
    OUTPUT_NAME "${LIB_NAME}"
)