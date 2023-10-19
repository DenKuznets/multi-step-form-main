// import Footer from '@/components/Footer/Footer';
// import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import MyLink from '@/components/MyLink/MyLink';
import Section from '@/components/Section/Section';
import text from '@/utils/text';

export default function Home() {
    return (
        <>
            <main className=" mx-auto flex flex-col uhd:max-w-[1920px]">
                <Hero />
                <h2
                    id="examples"
                    className="container mt-4 bg-violet py-10 text-center text-3xl font-bold text-white underline sm:mt-8 sm:text-4xl"
                >
                    {text.examples}
                </h2>
                <div className="flex-col flex gap-8">
                    <Section className="bg-violet text-white" projectId={1} />
                    <Section projectId={2} />
                    <Section className="bg-customYellow" projectId={3} />
                </div>
                <MyLink className="mx-auto mt-8 font-bold" href="/projects">
                    {text.allWorks}
                </MyLink>
            </main>
        </>
    );
}
