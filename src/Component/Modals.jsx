// import { useState } from "react"
// import { Flex, Modal } from 'antd';
// export const Modals = ({ platformUrl }) =>
// {
//     const [open, setOpen] = useState(false);

//     return (
//         <Flex vertical gap="middle" align="flex-start" style={{ height: '70vh' }}>
//             <Modal
//                 centered
//                 open={open}
//                 onCancel={() => setOpen(false)}
//                 width={1100}
//                 padding={10}
//                 bodyStyle={{ height: '70vh' }}
//             >
//                 <iframe
//                     src={platformUrl}
//                     height="100%"
//                     width="100%"
//                     title="Iframe Example">
//                 </iframe>
//             </Modal>
//         </Flex>
//     )
// }