function ProjectCard({ title, description, icon, tag }) {
  return (
    <div
      className="group relative bg-[#0a0f1a] border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:border-sky-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
    >
      {/* Icon + Tag */}
      <div className="flex items-start justify-between">
        <div className="text-3xl">{icon}</div>
        {tag && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-sky-300 bg-sky-400/10 border border-sky-400/20 px-3 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-sky-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-500/0 to-transparent group-hover:via-sky-500/50 transition-all duration-500" />
    </div>
  );
}

export default ProjectCard;