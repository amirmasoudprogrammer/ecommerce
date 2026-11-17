import { getCurrentUser } from "@/lib/authtoken";
import Header from "@/shared/components/Layout/Header/Header";

export default async function HeaderAuthUser() {
    const user = await getCurrentUser();

    return <Header user={user} />;
}
