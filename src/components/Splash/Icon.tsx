import * as React from 'react';
import { SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
		<path d="M24 2c-1.094 0-2 .906-2 2v.047c-5.336.445-9.71 4.422-10.758 9.578a6.59 6.59 0 0 0-.152.902c-.016.04-.067.164-.086.391-.066.809-.27 1.895-.52 2.988-.078.336-.156.672-.238 1v.008c-.008.027-.02.066-.031.121a78.393 78.393 0 0 1-.809 2.914 252.91 252.91 0 0 1-1.297 3.16c-.98 2.348-2.238 5.02-3.257 7.48-1.024 2.454-1.848 4.63-1.852 6.4-.004.398.133 1.566 1.328 2.78.77.782 1.945 1.372 3.555 1.95 1.472.535 3.379.996 5.488 1.379.281.52.672.972 1.184 1.28.734.442 1.633.743 2.68.977C19.331 47.82 22.03 48 25 48c2.965 0 5.668-.168 7.766-.629 1.047-.234 1.949-.531 2.687-.976.512-.313.902-.774 1.184-1.297 2.105-.383 4.011-.844 5.484-1.38 1.602-.577 2.781-1.167 3.55-1.948 1.196-1.215 1.333-2.383 1.329-2.782-.004-1.77-.828-3.941-1.848-6.398-1.023-2.461-2.28-5.133-3.257-7.48-.45-1.075-.895-2.153-1.305-3.172-.016-.051-.028-.098-.043-.141v-.012c.004.024 0 .008-.012-.027v-.004a14.113 14.113 0 0 0-.125-.426l-.035-.137-.004-.003-.117-.407v-.004c-.012-.043-.024-.078-.031-.109v-.004l-.004-.004-.145-.539-.004-.012c-.011-.047-.023-.086-.03-.117l-.005-.004v-.004c-.039-.152-.082-.308-.125-.468a1.976 1.976 0 0 1-.035-.153l-.004-.008v-.007a14.856 14.856 0 0 1-.152-.598l-.012-.035v-.008c-.047-.184-.09-.375-.137-.566l-.004-.004a3.556 3.556 0 0 0-.035-.16v-.012c-.258-1.113-.465-2.223-.535-3.047-.02-.23-.07-.355-.086-.39a6.473 6.473 0 0 0-.152-.903C37.71 8.465 33.336 4.492 28 4.047V4c0-1.094-.906-2-2-2Zm0 2h2v14h-2Zm-2 2.055v11.539A13.58 13.58 0 0 0 18 17h-1c-1.547 0-3.168.45-4.563 1.344.258-1.14.477-2.278.56-3.262-.005.043-.013.082.03-.082l.02-.078.012-.078c.03-.309.074-.559.129-.762l.003-.023.008-.028C14.055 9.79 17.621 6.496 22 6.055Zm6 0c4.379.441 7.945 3.734 8.8 7.976l.009.028.004.023c.054.203.097.457.128.762l.012.078.02.078c.043.164.035.125.03.082.083.984.302 2.125.563 3.266A8.528 8.528 0 0 0 33 17h-1a13.58 13.58 0 0 0-4 .594Zm-8.047 1.941a1.03 1.03 0 0 0-.265.05s-3.336 1.09-4.625 4.61a.996.996 0 0 0 .593 1.281.996.996 0 0 0 1.281-.593c.961-2.606 3.375-3.39 3.375-3.39.465-.145.758-.606.696-1.087a1 1 0 0 0-.953-.87h-.102ZM17 19h1c2.645 0 4.574.906 4.574.906l.203.094h4.446l.203-.094S29.356 19 32 19h1c2.227 0 4.668 1.168 5.727 3.664.418 1.043.87 2.133 1.32 3.215 1.004 2.414 2.262 5.082 3.258 7.48C44.3 35.754 45 37.945 45 39v.02c0-.086.059.523-.75 1.347h-.004c-.34.344-1.348.946-2.809 1.473-1.28.465-2.933.898-4.843 1.258-.149-.22-.367-.598-.645-1.422a1.003 1.003 0 1 0-1.898.648c.316.918.633 1.48.875 1.86-.055.136-.168.289-.512.5-.437.265-1.16.53-2.078.734-1.84.402-4.45.582-7.336.582-2.883 0-5.492-.188-7.328-.598-.922-.203-1.645-.472-2.082-.734-.25-.152-.375-.273-.457-.379a7.642 7.642 0 0 0 1.82-2.98A1.005 1.005 0 0 0 16 39.985a1.004 1.004 0 0 0-.953.706c-.45 1.403-1.305 2.211-1.55 2.422-1.95-.36-3.634-.804-4.934-1.273-1.461-.528-2.473-1.13-2.813-1.473-.809-.824-.75-1.433-.75-1.347V39c0-1.055.7-3.246 1.695-5.64.996-2.4 2.254-5.067 3.258-7.481.457-1.086.91-2.184 1.328-3.234C12.348 20.165 14.777 19 17 19Zm1.36 1c-1.84 0-3.278.93-4.137 2.121-.82 1.137-1.18 2.484-1.211 3.707v.004A1.214 1.214 0 0 0 13 26c0 1.332.531 3.25 1.04 5.027a91.853 91.853 0 0 0 1.01 3.29 1.001 1.001 0 0 0 1.9-.633s-.497-1.485-.99-3.211c-.167-.582-.308-1.188-.448-1.785.086.023.175.062.258.082a8.963 8.963 0 0 0 2.16.23H22v1.68l-4.813 6.738A.998.998 0 0 0 18 39h14a.997.997 0 0 0 .813-1.582L28 30.68V29h4s.027-.004.031 0c.094 0 1.086.031 2.2-.23.081-.02.171-.06.257-.082-.14.597-.281 1.203-.449 1.785a84.166 84.166 0 0 1-.988 3.21 1.001 1.001 0 0 0 1.898.633s.504-1.515 1.012-3.289C36.469 29.25 37 27.332 37 26a1 1 0 0 0-.012-.152c-.027-1.227-.386-2.582-1.21-3.727C34.917 20.93 33.48 20 31.64 20c-3.336 0-5.391 2.34-5.391 2.34A.998.998 0 0 0 26 23v3.39c-.105-.035-.207-.078-.316-.105A.994.994 0 0 0 25 26a.994.994 0 0 0-.684.285c-.109.027-.21.07-.316.106V23a1 1 0 0 0-.25-.66S21.695 20 18.36 20Zm0 2c2.12 0 3.335 1.152 3.64 1.465V27h-4.031s-.903.02-1.739-.176c-.421-.097-.8-.258-.996-.41C15.035 26.262 15 26.22 15 26c0-.855.29-1.934.848-2.715.558-.777 1.3-1.285 2.511-1.285Zm13.28 0c1.212 0 1.954.508 2.512 1.285.559.781.848 1.86.848 2.715 0 .219-.035.262-.234.414-.196.152-.575.313-.996.41-.836.196-1.739.176-1.739.176H28v-3.535c.305-.313 1.52-1.465 3.64-1.465ZM25 28c.566 0 1 .434 1 1v1h-2v-1c0-.566.434-1 1-1Zm-1.484 4H24v5h-1v-4.277ZM26 32h.484l.516.723V37h-1Zm-5 3.523V37h-1.055Zm8 0L30.055 37H29Z" />
	</svg>
);

export { Icon };