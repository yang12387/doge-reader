#include <jsmodules/JSCModuleExtension.h>
#include <jquick_config.h>
#include "Shell/JSShell.hpp"

using namespace JQUTIL_NS;

static std::vector<std::string> exportList = {
    "Shell"
};

static int module_init(JSContext *ctx, JSModuleDef *m)
{
    auto env = JQModuleEnv::CreateModule(ctx, m, "shell");
    JSValue shellObj = createShell(env.get());
    env->setModuleExport("Shell", shellObj);
    env->setModuleExportDone(JS_UNDEFINED, exportList);
    return 0;
}

DEF_MODULE_LOAD_FUNC_EXPORT(shell, module_init, exportList)

extern "C" JQUICK_EXPORT void custom_init_jsapis()
{
    registerCModuleLoader("shell", &shell_module_load);
}