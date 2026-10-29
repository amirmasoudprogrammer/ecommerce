import {NextResponse} from "next/server";

interface IRegisterData {
    name: string,
    email: string,
    password: string;
}

export async function POST(request: Request) {
    try {
        const body: unknown = await request.json()
        if (typeof body !== "object" || body === null || !("name" in body) || !("email" in body) || !("password" in body)) {
            return NextResponse.json(
                {message: "Registration information is incomplete.!"},
                {status: 400}
            )
        }
        const {name, email, password} = body as IRegisterData
        if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string" || !name.trim() || !email.trim() || password.length < 8) {
            return NextResponse.json(
                {message: "The entered information is not valid."},
                {status: 400}
            );
        }
        return NextResponse.json(
            {message: "The information is valid; it has not yet been entered into the database.!"},
            {status: 200}
        );


    } catch (e) {
        return NextResponse.json(
            {message: "بدنه درخواست باید JSON معتبر باشد"},
            {status: 400}
        )
    }

}

