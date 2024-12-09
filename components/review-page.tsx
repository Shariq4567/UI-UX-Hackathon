import ReviewCard2 from "./review-card-2"

export default function ReviewPage() {
    return (
        <div className="w-full flex justify-center flex-wrap gap-[20px]">
            <ReviewCard2 Review="&quot;I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&rsquo;s become my favorite go-to shirt.&rsquo;" Name={"Samantha D."} Date={14} />
            <ReviewCard2 Review="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me." Name={"Alex M."} Date={15} />
            <ReviewCard2 Review="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt." Name={"Ethan R."} Date={16} />
            <ReviewCard2 Review="As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out." Name={"Olivia P."} Date={17} />
            <ReviewCard2 Review="This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion." Name={"Liam K."} Date={18} />
            <ReviewCard2 Review="I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter." Name={"Ava H."} Date={19} />
        </div>
    )
}
