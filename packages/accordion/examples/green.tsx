import { useState } from 'react';
import { AccordionHeader, Accordion } from '@/packages/accordion';

const AccordionGreenColor = () => {
  const [activeItem, setActiveItem] = useState('');

  const toggleActiveItem = (id) => () => {
    setActiveItem((prevState) => (prevState !== id ? id : ''));
  };

  return (
    <div className="mb-12">
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-6">
        Green header without icon
      </h2>
      <AccordionHeader variant="green" onClick={toggleActiveItem('item-1')}>
        Accordion Group Item #1
      </AccordionHeader>
      <Accordion id="item-1" isOpen={activeItem}>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </Accordion>
      <AccordionHeader variant="green" onClick={toggleActiveItem('item-2')}>
        Accordion Group Item #2
      </AccordionHeader>
      <Accordion id="item-2" isOpen={activeItem}>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi.
        </p>
      </Accordion>
      <AccordionHeader variant="green" onClick={toggleActiveItem('item-3')}>
        Accordion Group Item #3
      </AccordionHeader>
      <Accordion id="item-3" isOpen={activeItem}>
        <p className="mb-4">
          dales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
          Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas
          mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas
          porttitor. Morbi lectus risus, iaculis.
        </p>
        <p>
          Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
          Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Nam nec
          ante.
        </p>
      </Accordion>
    </div>
  );
};

export default AccordionGreenColor;
