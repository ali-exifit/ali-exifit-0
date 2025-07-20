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
    <section className="py-4 relative" style={{ marginTop: '8px' }}>
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div className="blur-sheet rounded-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="container mx-auto px-6 sm:px-8 lg:px-12 py-8"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 space-x-reverse bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-4 py-2 mb-4">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-gray-800 font-bold text-sm">تیم متخصص ما</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black mb-4 text-gray-800">
                ساختار سازمانی
              </h2>
              <p className="text-base text-gray-700 max-w-2xl mx-auto font-bold">
                تیمی از بهترین متخصصان در سه بخش تخصصی
              </p>
            </motion.div>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200">
                    {/* Department Header */}
                    <div className="bg-gradient-to-r from-purple-500 to-emerald-500 p-4 text-center">
                      <h3 className="text-white font-black text-lg mb-1">
                        {dept.name}
                      </h3>
                    </div>

                    {/* Department Leader */}
                    <div className="p-4 border-b border-white/20">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="relative">
                          <img
                            src={dept.leader.image}
                            alt={dept.leader.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <Crown className="absolute -top-1 -right-1 w-4 h-4 text-yellow-500" />
                        </div>
                        <div>
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
                    <div className="p-4">
                      <h5 className="font-black text-gray-800 text-sm mb-3 flex items-center">
                        <Star className="w-4 h-4 text-emerald-500 ml-1" />
                        اعضای تیم
                      </h5>
                      <div className="space-y-3">
                        {dept.members.map((member, memberIndex) => (
                          <div key={memberIndex} className="flex items-center space-x-3 space-x-reverse">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
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
                    <div className="bg-white/20 p-3 text-center">
                      <div className="flex justify-center items-center space-x-2 space-x-reverse">
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
              <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-6 max-w-lg mx-auto">
                <h3 className="text-lg font-black text-gray-800 mb-3">
                  به تیم ما بپیوندید
                </h3>
                <p className="text-gray-700 mb-4 font-semibold text-sm">
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