import { redirect } from "@remix-run/node";
import { authenticator } from "../service/auth.server";

export async function loader() {
  return redirect("/login");
}

export async function action({ request }) {
  return authenticator.authenticate("microsoft", request, {
    successRedirect: "/protected"
  });
}
