import SignIn from "@/components/shared/sign-in";
import { auth, signOut } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <SignIn />
      {session && (
        <div>
          <p>Signed in as {session.user?.email}</p>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Sign out</button>
          </form>
        </div>
      )}
    </div>
  );
}
