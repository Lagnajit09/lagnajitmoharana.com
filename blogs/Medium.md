# Project: Medium Clone

**Medium is** an advanced and feature-rich blogging platform designed to enhance your writing and reading experience.
Visit my website:  https://medium-pro.web.app/

Find my project repository: 

[https://github.com/Lagnajit09/Medium](https://github.com/Lagnajit09/Medium)

## Key Features

1. **General Features**
    - **Light/Dark Mode:** Switch between themes for a comfortable reading experience.
    - **Enhanced Landing Page:** A visually appealing entry point.
    - **User Authentication:** Secure sign-up and login.
    - **Responsive Design:** Seamless use across devices.
2. **Writing & Editing**
    - **Rich Text Editor:** Intuitive and powerful.
    - **Markdown Support:** Flexible writing options.
    - **Code Embedding:** Syntax-highlighted code snippets.
3. **User Interaction**
    - **Comments & Likes:** Engage with the community.
    - **Profile Management:** Manage personal information and articles.
    - **Social Sharing:** Easy sharing on social media.

## Technology Stack

    **Client-Side Technologies:**

- **React:** A JavaScript library for building user interfaces. It allows developers to create reusable UI components.
- **Vite:** A build tool that provides a faster and leaner development experience for modern web projects.
- **TypeScript:** A typed superset of JavaScript that enhances code quality and development productivity.
- **Emotion & Styled-Components:** Libraries for writing CSS styles with JavaScript, offering scoped styling and dynamic theming.
- **MUI:** A popular React UI framework providing pre-designed components for faster development.
- **Tailwind CSS:** A utility-first CSS framework for quickly building custom designs.

    **State Management and Backend Services:**

- **Recoil:** A state management library for React applications, providing a flexible and efficient way to manage shared state.
- **Appwrite:** An open-source backend server for web, mobile, and Flutter developers, offering real-time APIs and SDKs.
- **Firebase:** A platform developed by Google for creating mobile and web applications, offering various backend services.

    **Server-Side Technologies:**

- **Express:** A minimal and flexible Node.js web application framework providing a robust set of features for web and mobile applications.
- **Hono:** A fast, simple, and lightweight web framework for JavaScript and TypeScript.
- **Prisma:** An ORM (Object-Relational Mapping) tool that simplifies database management and integrates seamlessly with PostgreSQL.
- **PostgreSQL:** A powerful, open-source relational database system known for its robustness, extensibility, and standards compliance.
- **JWT (JSON Web Token):** A compact, URL-safe means of representing claims to be transferred between two parties.
- **bcrypt:** A password-hashing function designed to be computationally intensive to protect against brute-force attacks.
- **Cloudflare Workers:** A serverless platform that allows developers to deploy code directly at the edge, providing low-latency and high-availability solutions.

**Zod for Validation:** 

A TypeScript-first schema declaration and validation library ensuring runtime type safety and validation.

Find my zod-validation package for the medium here:

[https://www.npmjs.com/package/@lagnajit09/medium-zod](https://www.npmjs.com/package/@lagnajit09/medium-zod)

https://editorjs.io/

[https://editorjs.io/base-concepts/](https://editorjs.io/base-concepts/)

**Editor.js** is a block-styled editor designed to provide a clean data output in JSON format. It offers a modular approach to content creation, allowing users to add, remove, and rearrange blocks such as paragraphs, images, lists, and embeds easily. Editor.js focuses on providing a user-friendly editing experience and structured data storage, making it suitable for use in various applications, from blogs to content management systems. Its extensibility through plugins allows for customization to fit different needs and workflows.

Install the required dependencies for Editor.js:

`@editorjs/code`
`@editorjs/editorjs`
`@editorjs/embed`
`@editorjs/header`
`@editorjs/image`
`@editorjs/link`
`@editorjs/paragraph`
`@editorjs/simple-image`

**Configuration:**

```tsx
const Editor = ({data, fetchedTitle, read}:EditorProps) => {
  const editorInstance = useRef<EditorJS>();
  const [title, setTitle] = useState(fetchedTitle);
  const setEditorAtom = useSetRecoilState(editorInstanceAtom);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!editorInstance.current) {
      try {
        editorInstance.current = new EditorJS({
        holder: 'editorjs',
        placeholder: 'Let\'s write an awesome story!',
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+H',
            config: {
              placeholder: 'Title',
              levels: [2, 3, 4],
              defaultLevel: 2,
            },
          },
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+P',
            config: {
              placeholder: 'Write your story here...',
            },
          },
          image: {
            class: Image,
            shortcut: 'ALT+SHIFT',
            config: {
              uploader: {
                uploadByFile(file: File) {
                  return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                      resolve({
                        success: 1,
                        file: {
                          url: reader.result as string,
                        },
                      });
                    };
                    reader.onerror = (error) => {
                      reject(error);
                    };
                    reader.readAsDataURL(file);
                  });
                },
                uploadByUrl(url: string) {
                  return new Promise((resolve) => {
                    resolve({
                      success: 1,
                      file: {
                        url: url,
                      },
                    });
                  });
                },
              },
            },
          },
          code: {
            class: Code,
            config: {}
            },
          linkTool: {
            class: LinkTool,
            config: {
	            // Your backend endpoint for url data fetching
              endpoint: `${SERVER}/api/v1/user/fetchurl`,
            }}},
        data: data,
        readOnly: read,
        onChange: () => {updateBtnText()}
        });
      } catch (error) {
        navigate('/home')
      }}
      return () => {
        try {
        editorInstance.current?.destroy();
        editorInstance.current = undefined;
        } catch (error) {
          console.log(error)
        }};
    }, []);
```

## Future Enhancements

- **Enhanced Analytics:** Better audience insights.
- **Advanced Search:** Improved content discovery.
- **Customizable Themes:** Personalize profiles and articles.
- **AI Integration:** AI-assisted writing features.