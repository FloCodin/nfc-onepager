"use client";

import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-xl rounded-2xl max-w-md w-full p-6 text-center space-y-6">
                <div className="flex flex-col items-center">
                  <Link href="https://www.codin.ch">
                    <Image
                        src="/codin%20black@0.75x.webp"
                        alt="codin logo"
                        className="h-12 mb-4"
                        height={100}
                        width={100}
                    />
                  </Link>
                    <Link href="https://www.codin.ch">
                    <Image
                        src="/img.png"
                        alt="Florian Rogenmoser"
                        className="w-36 h-36 rounded-full border-4 border-white shadow-md"
                        height={256}
                        width={256}
                    />
                  </Link>
                    <h2 className="text-xl font-semibold mt-2 text-emerald-400">
                        Florian Rogenmoser
                    </h2>
                    <p className="text-gray-500">Applikationsentwickler</p>
                </div>

                <Tabs defaultValue="business" className="w-full mt-4">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-200">
                        <TabsTrigger value="business">Business</TabsTrigger>
                        <TabsTrigger value="private">Private</TabsTrigger>
                    </TabsList>

                    <TabsContent value="business">
                        <div className="space-y-3 mt-4">
                            <Link
                                href="/vcard.vcf"
                                download
                                className="block bg-black text-emerald-400 rounded-full py-2 font-semibold"
                            >
                                Herunterladen
                            </Link>
                            <Link
                                href="tel:+41629232222"
                                className="block bg-black text-emerald-400 rounded-full py-2 font-semibold"
                            >
                                Anrufen
                            </Link>
                            <Link
                                href="mailto:florian.rogenmoser@codin.ch"
                                className="block bg-black text-emerald-400 rounded-full py-2 font-semibold"
                            >
                                E-Mail schreiben
                            </Link>

                            <Link
                                href="//github.com/FloCodin"
                                target="_blank"
                                className="block bg-black text-emerald-400 rounded-full py-2 font-semibold"
                            >
                                GitHub
                            </Link>

                        </div>

                        <div className="text-sm text-left mt-6 text-emerald-400 ">
                            <p className="font-semibold">Kontaktdaten</p>
                            <p>+41 62 923 22 22</p>
                            <p>hello@codin.ch</p>
                            <p>https://www.codin.ch</p>
                            <br/>
                            <p className="font-semibold">Adresse</p>
                            <p>codin GmbH</p>
                            <p>Hauptstrasse 64</p>
                            <p>5070 Frick</p>
                            <p>Schweiz</p>
                        </div>
                    </TabsContent>

                    <TabsContent value="private">
                        <div className="mt-4 space-y-3">
                            <Link
                                href="https://www.instagram.com/flothedeveloper/"
                                target="_blank"
                                className="block bg-black text-emerald-400 rounded-full py-2 font-semibold"
                            >
                                Instagram
                            </Link>
                            <Link
                                href="https://wa.me/41795321727"
                                target="_blank"
                                className="block bg-black text-emerald-400 rounded-full py-2 font-semibold"
                            >
                                WhatsApp schreiben
                            </Link>
                            <Link
                                href=""
                                target="_blank"
                                className="block bg-black text-emerald-400 rounded-full py-2 font-semibold"
                            >
                                Portfolio Website
                            </Link>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
}
