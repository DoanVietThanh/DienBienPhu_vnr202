import {motion} from "framer-motion";

export default function Banner() {
  return (
    <section className="max-w-screen flex flex-col text-white bg-no-repeat repeat-0 items-center justify-center relative overflow-hidden bg-[url(@/assets/images/bg-cover.png)] bg-cover h-[105dvh]">
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-black/50 z-10"
          style={{
            backgroundImage: `url(@/assets/images/bg-cover.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </motion.div>
      <div className="z-10 text-center">
        <motion.h1
          style={{
            fontFamily: '"iCielBC DroneRangerSerif Regular", serif',
          }}
          className="text-6xl font-bold mb-6 text-red-500"
          initial={{y: -50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.2}}
        >
          Điện Biên Phủ Trên Không
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-300 font-semibold"
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.4}}
        >
          Chiến dịch 12 ngày đêm - Tháng 12/1972
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-lg"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 0.6}}
        >
          Cuộc chiến lịch sử bảo vệ bầu trời Hà Nội chống lại chiến dịch ném bom
          B-52 của Mỹ, đánh dấu bước ngoặt quan trọng trong cuộc kháng chiến
          chống Mỹ.
        </motion.p>
      </div>
      s{" "}
    </section>
  );
}
