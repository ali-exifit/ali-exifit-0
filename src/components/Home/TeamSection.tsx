import React from 'react';
import { motion } from 'framer-motion';
import { Users, Crown, Star, Award } from 'lucide-react';

const TeamSection: React.FC = () => {
  const departments = [
    {
      id: 1,
      name: "بخش فناوری و توسعه",
      leader: {
        name: "دکتر محمد احمدی",
        role: "مدیر فناوری",
        image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
      },
      members: [
        { name: "مهندس علی کریمی", role: "توسعه‌دهنده ارشد", image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg" },
        { name: "مهندس سارا محمدی", role: "طراح UI/UX", image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg" }
      ]
    },
    {
      id: 2,
      name: "بخش پزشکی و مشاوره",
      leader: {
        name: "دکتر فاطمه رضایی",
        role: "مدیر پزشکی",
        image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg"
      },
      members: [
        { name: "دکتر حسین نوری", role: "متخصص قلب", image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg" },
        { name: "دکتر مریم احمدی", role: "متخصص اطفال", image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg" }
      ]
    },
    {
      id: 3,
      name: "بخش تحقیق و توسعه",
      leader: {
        name: "دکتر امیر حسینی",
        role: "مدیر تحقیقات",
        image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg"
      },
      members: [
        { name: "دکتر زهرا کریمی", role: "محقق ارشد", image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg" },
        { name: "مهندس رضا نوری", role: "تحلیلگر داده", image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <section className="relative">
      <div className="responsive-margin">
        <div className="blur-sheet rounded-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="container mx-auto responsive-padding section-container"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center content-spacing">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-gray-800 font-bold text-sm">تیم متخصص ما</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-gray-800">
                ساختار سازمانی
              </h2>
              <p className="text-base text-gray-700 max-w-2xl mx-auto font-bold">
                تیمی از بهترین متخصصان در سه بخش تخصصی
              </p>
            </motion.div>

            {/* Departments Grid */}
            <div className="card-container">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200">
                    {/* Department Header */}
                    <div className="bg-gradient-to-r from-purple-500 to-emerald-500 responsive-padding-sm text-center">
                      <h3 className="text-white font-black text-lg">
                        {dept.name}
                      </h3>
                    </div>

                    {/* Department Leader */}
                    <div className="responsive-padding-sm border-b border-white/20">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src={dept.leader.image}
                            alt={dept.leader.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <Crown className="absolute -top-1 -right-1 w-4 h-4 text-yellow-500" />
                        </div>
                        <div className="text-spacing">
                          <h4 className="font-black text-gray-800 text-sm">
                            {dept.leader.name}
                          </h4>
                          <p className="text-purple-600 font-bold text-xs">
                            {dept.leader.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Department Members */}
                    <div className="responsive-padding-sm content-spacing">
                      <h5 className="font-black text-gray-800 text-sm flex items-center gap-1">
                        <Star className="w-4 h-4 text-emerald-500 ml-1" />
                        اعضای تیم
                      </h5>
                      <div className="text-spacing">
                        {dept.members.map((member, memberIndex) => (
                          <div key={memberIndex} className="flex items-center gap-3">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div className="text-spacing">
                              <p className="font-bold text-gray-800 text-xs">
                                {member.name}
                              </p>
                              <p className="text-gray-600 font-semibold text-xs">
                                {member.role}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Department Stats */}
                    <div className="bg-white/20 responsive-padding-sm text-center">
                      <div className="flex justify-center items-center gap-2">
                        <Award className="w-4 h-4 text-purple-500" />
                        <span className="text-gray-800 font-bold text-xs">
                          {dept.members.length + 1} متخصص
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-8"
            >
              <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl responsive-padding max-w-lg mx-auto content-spacing">
                <h3 className="text-lg font-black text-gray-800">
                  به تیم ما بپیوندید
                </h3>
                <p className="text-gray-700 font-semibold text-sm">
                  در حال جستجوی استعدادهای جدید برای توسعه آینده سلامت دیجیتال
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all duration-200"
                >
                  مشاهده فرصت‌های شغلی
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;