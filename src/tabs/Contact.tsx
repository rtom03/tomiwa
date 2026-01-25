import {
  Github,
  Linkedin,
  LoaderCircle,
  MessageCircleDashed,
} from "lucide-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      setLoading(!loading);
      let formData = new FormData(event.currentTarget);
      formData.append("access_key", "8483155a-3869-43c4-87b3-8b87e7f12ace");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        form.reset();
        toast(
          "“Thanks for the ping! 🚀 I’ll ACK this faster than a hotfix in prod — swift response incoming.” 😄",
        );
        setLoading(false);
      } else {
        form.reset();
        toast("An error occured while sending! pls try again");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-2xl mx-auto py-12">
      <ToastContainer />
      <h1 className="text-5xl font-bold mb-8 bg-linear-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
        Get in Touch
      </h1>
      <p className="text-gray-400 mb-12 text-lg">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>

      <div className="space-y-6 mb-12">
        <a
          href="https://wa.me/2349016672162"
          className="flex items-center gap-4 p-6 bg-gray-800/50 dark:bg-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="p-3 bg-blue-500/10 rounded-lg">
            <MessageCircleDashed className="text-blue-400" size={24} />
          </div>
          <div>
            <p className="text-gray-400 text-sm">WhatsApp</p>
            <p className="text-white font-semibold">
              Message me directly on whatsapp
            </p>
          </div>
        </a>

        <a
          href="https://github.com/rtom03"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 bg-gray-800/50 dark:bg-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="p-3 bg-blue-500/10 rounded-lg">
            <Github className="text-blue-400" size={24} />
          </div>
          <div>
            <p className="text-gray-400 text-sm">GitHub</p>
            <p className="text-white font-semibold">github.com/rtom03</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/tomiwa-raheem-98b19a398/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 bg-gray-800/50 dark:bg-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="p-3 bg-blue-500/10 rounded-lg">
            <Linkedin className="text-blue-400" size={24} />
          </div>
          <div>
            <p className="text-gray-400 text-sm">LinkedIn</p>
            <p className="text-white font-semibold">
              linkedin.com/in/tomiwa.raheem
            </p>
          </div>
        </a>
      </div>

      <form
        className="bg-gray-800/50 dark:bg-gray-900/50 p-8 rounded-xl border border-gray-700"
        onSubmit={onSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Mail me directly</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Name</label>
            <input
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white"
              placeholder="Your name"
              type="text"
              name="name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white"
              placeholder="your.email@example.com"
              type="email"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white"
              placeholder="Your message..."
              name="message"
              required
            />
          </div>
          <button className="w-full px-8 py-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center">
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
