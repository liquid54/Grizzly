import TermsOfUse from "@/components/features/FAQ/TermsOfUse";
import FAQ from "@/components/features/FAQ/FAQ";

const Faq = () => {
    return (
        <div className='space-y-[150px] px-[375px] pt-[100px]'>
            <FAQ/>
            <TermsOfUse/>
        </div>
    );
}

export default Faq;