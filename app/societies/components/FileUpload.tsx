// import React, { useState } from 'react'
// import Image from 'next/image'
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// function FileUpload() {

//     const [imagePreview, setImagePreview] = useState<any>([]);
//     const handleFileUpload = (event) => {
//         const files = event.target.files;

//         const previews = Array.from(files).map((file) => URL.createObjectURL(file))
//         setImagePreview(previews)
//     }

//     return (
//         <>

//             <div className="grid w-full max-w-sm items-center gap-1.5">
//                 <Label htmlFor="picture">Picture</Label>
//                 <Input id="picture" type="file" multiple className='input input-bordered w-full max-w-xs border-2 border-gray-400 '
//                     onChange={handleFileUpload}
//                 />
//             </div>
//             <div className='grid grid-cols-8'>
//                 {imagePreview.map((image: any, index: React.Key | null | undefined) => (
//                     <div key={index}>
//                         <Image src={image} width={120} height={120}
//                             className="rounded-lg my-4"
//                             alt="index"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default FileUpload


