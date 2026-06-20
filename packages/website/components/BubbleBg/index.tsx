export default function BubbleBg() {
  return (
    <div className="bubble-container" aria-hidden="true">
      <div className="bubble bubble-1" />
      <div className="bubble bubble-2" />
      <div className="bubble bubble-3" />
      <div className="bubble bubble-4" />
      <div className="bubble bubble-5" />
      <div className="bubble bubble-6" />
      <div className="bubble bubble-7" />

      <style>{`
        .bubble-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        .bubble {
          position: absolute;
          border-radius: 50%;
          opacity: 0;
          will-change: transform, opacity;
        }
        .bubble-1 {
          width: 90px;
          height: 90px;
          bottom: -100px;
          left: 5%;
          animation: bubbleFloat 20s ease-in-out infinite;
          background: radial-gradient(circle at 30% 30%, rgba(0, 180, 216, 0.22), transparent 70%);
        }
        .bubble-2 {
          width: 60px;
          height: 60px;
          bottom: -80px;
          left: 18%;
          animation: bubbleFloat 24s ease-in-out infinite 3s;
          background: radial-gradient(circle at 30% 30%, rgba(0, 180, 216, 0.18), transparent 70%);
        }
        .bubble-3 {
          width: 120px;
          height: 120px;
          bottom: -140px;
          left: 38%;
          animation: bubbleFloat 22s ease-in-out infinite 1s;
          background: radial-gradient(circle at 30% 30%, rgba(0, 119, 182, 0.15), transparent 70%);
        }
        .bubble-4 {
          width: 50px;
          height: 50px;
          bottom: -70px;
          left: 58%;
          animation: bubbleFloat 28s ease-in-out infinite 5s;
          background: radial-gradient(circle at 30% 30%, rgba(0, 180, 216, 0.2), transparent 70%);
        }
        .bubble-5 {
          width: 80px;
          height: 80px;
          bottom: -100px;
          left: 75%;
          animation: bubbleFloat 18s ease-in-out infinite 2s;
          background: radial-gradient(circle at 30% 30%, rgba(0, 180, 216, 0.22), transparent 70%);
        }
        .bubble-6 {
          width: 45px;
          height: 45px;
          bottom: -60px;
          left: 88%;
          animation: bubbleFloat 26s ease-in-out infinite 4s;
          background: radial-gradient(circle at 30% 30%, rgba(0, 119, 182, 0.18), transparent 70%);
        }
        .bubble-7 {
          width: 70px;
          height: 70px;
          bottom: -90px;
          left: 48%;
          animation: bubbleFloat 30s ease-in-out infinite 6s;
          background: radial-gradient(circle at 30% 30%, rgba(0, 180, 216, 0.16), transparent 70%);
        }
        .dark .bubble-1,
        .dark .bubble-5 {
          background: radial-gradient(circle at 30% 30%, rgba(0, 229, 160, 0.18), transparent 70%);
        }
        .dark .bubble-2,
        .dark .bubble-4 {
          background: radial-gradient(circle at 30% 30%, rgba(0, 229, 160, 0.14), transparent 70%);
        }
        .dark .bubble-3,
        .dark .bubble-6 {
          background: radial-gradient(circle at 30% 30%, rgba(0, 196, 136, 0.12), transparent 70%);
        }
        .dark .bubble-7 {
          background: radial-gradient(circle at 30% 30%, rgba(0, 229, 160, 0.1), transparent 70%);
        }
        @keyframes bubbleFloat {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.6);
          }
          15% {
            opacity: 0.7;
            transform: translateY(-40vh) scale(1) translateX(20px);
          }
          30% {
            opacity: 0.6;
            transform: translateY(-80vh) scale(0.9) translateX(-10px);
          }
          50% {
            opacity: 0.5;
            transform: translateY(-140vh) scale(1.1) translateX(30px);
          }
          70% {
            opacity: 0.35;
            transform: translateY(-200vh) scale(0.85) translateX(-15px);
          }
          90% {
            opacity: 0.2;
            transform: translateY(-260vh) scale(0.9) translateX(10px);
          }
          100% {
            opacity: 0;
            transform: translateY(-300vh) scale(0.7) translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
