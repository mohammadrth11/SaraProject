import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
export default function LoginDrower() {
  return (
    <>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <button>Login</button>
        </DrawerTrigger>
        <DrawerContent className="p-8 w-full md:w-[400px] h-full fixed right-0 top-0 bg-white shadow-lg overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Sign in</h2>
            <DrawerClose asChild>
              <button className="text-xl font-bold">&times;</button>
            </DrawerClose>
          </div>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-600 mb-1"
              >
                Username or email address *
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 px-3 py-2"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-600 mb-1"
              >
                Password *
              </label>
              <input
                id="password"
                type="password"
                className="w-full border border-gray-300 px-3 py-2"
                required
              />
            </div>

            <button type="submit" className="w-full bg-red-600 text-white py-2">
              Log in
            </button>

            <div className="flex items-center gap-2 pt-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-sm text-gray-500">
                Remember me
              </label>
            </div>

            <a
              href="#"
              className="text-sm text-blue-600 underline block text-right"
            >
              Lost your password?
            </a>

            <a
              href="#"
              className="text-sm text-blue-600 underline block text-center pt-4"
            >
              Create An Account
            </a>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
}
