import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SmartScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Chỉ cuộn lên đầu nếu đang ở trang detail
    if (pathname.startsWith("/detail")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

export default SmartScrollToTop;
