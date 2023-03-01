import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Table,
} from 'reactstrap';

function Example({details}) {
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">Member Details</AccordionHeader>
                    <AccordionBody accordionId="1">
                    <Table>
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            
                                { details.map((post,i) =>{
                                    return(
                                <>
                                <tr>
                                <td>{i+1}</td>
                                <td>{post.name}</td>
                                <td>{post.email}</td>
                                </tr>
                                </>
                                    )
                                })}
                        </Table>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Example;