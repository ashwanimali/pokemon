
const Breadcrumb = ({ items }: { items: any }) => {
    return (
        <nav className="flex mb-4 md:ml-[5rem] sm:ml-[2rem]" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {items.map((item: any, index: any) => (
                    <li key={index} className="inline-flex items-center">
                        {index > 0 && (
                            <svg
                                className="w-6 h-6 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        )}
                        {index < items.length - 1 ? (

                            <a href={item.href} className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                                {item.label}
                            </a>

                        ) : (
                            <span className="text-gray-500 text-sm font-medium">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
