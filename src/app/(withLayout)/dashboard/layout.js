import Footer from "@/components/Shared/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
