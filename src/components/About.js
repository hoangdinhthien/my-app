import React from 'react';
import { Collapsible, CollapsibleItem, Container, Icon } from 'react-materialize';

export default function About () {
    return (
        <Container>
            <Collapsible accordion popout>
                <CollapsibleItem
                    expanded={false}
                    header="THE TEAM"
                    icon={<Icon>people</Icon>}
                    node="div"
                    style={{ textAlign: 'left' }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi repellat sapiente consequatur minus ipsa illum fuga unde architecto, eius rem.
                    Ducimus officia cupiditate tempora magnam doloribus error laboriosam veritatis unde!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi repellat sapiente consequatur minus ipsa illum fuga unde architecto, eius rem.
                    Ducimus officia cupiditate tempora magnam doloribus error laboriosam veritatis unde!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi repellat sapiente consequatur minus ipsa illum fuga unde architecto, eius rem.
                    Ducimus officia cupiditate tempora magnam doloribus error laboriosam veritatis unde!
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="NATIONS"
                    icon={<Icon>place</Icon>}
                    node="div"
                    style={{ textAlign: 'left' }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi repellat sapiente consequatur minus ipsa illum fuga unde architecto, eius rem.
                    Ducimus officia cupiditate tempora magnam doloribus error laboriosam veritatis unde!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi repellat sapiente consequatur minus ipsa illum fuga unde architecto, eius rem.
                    Ducimus officia cupiditate tempora magnam doloribus error laboriosam veritatis unde!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi repellat sapiente consequatur minus ipsa illum fuga unde architecto, eius rem.
                    Ducimus officia cupiditate tempora magnam doloribus error laboriosam veritatis unde!
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="DAILY NEWS"
                    icon={<Icon>whatshot</Icon>}
                    node="div"
                    style={{ textAlign: 'left' }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi repellat sapiente consequatur minus ipsa illum fuga unde architecto, eius rem.
                    Ducimus officia cupiditate tempora magnam doloribus error laboriosam veritatis unde!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi repellat sapiente consequatur minus ipsa illum fuga unde architecto, eius rem.
                    Ducimus officia cupiditate tempora magnam doloribus error laboriosam veritatis unde!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi repellat sapiente consequatur minus ipsa illum fuga unde architecto, eius rem.
                    Ducimus officia cupiditate tempora magnam doloribus error laboriosam veritatis unde!
                </CollapsibleItem>
            </Collapsible>
        </Container >
    );
}
