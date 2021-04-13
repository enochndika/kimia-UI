import { useState } from 'react';
import { AccordionHeader, Accordion } from '@/packages/accordion';

export const AccordionIndigoColor = () => {
  const [accordionId, setAccordionId] = useState('');

  const toggleCollapse = (id) => () => {
    setAccordionId((prevState) => (prevState !== id ? id : ''));
  };

  return (
    <div className="mb-12">
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-6">
        Indigo header
      </h2>
      <AccordionHeader
        id="item-1"
        accordionId={accordionId}
        variant="indigo"
        onClick={toggleCollapse('item-1')}
        downIcon={<PlusCircleIcon className="mt-1 h-4" />}
        upIcon={<MinusCircleIcon className="mt-1 h-4" />}
      >
        Accordion Group Item #1
      </AccordionHeader>
      <Accordion id="item-1" isOpen={accordionId}>
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
      <AccordionHeader
        id="item-2"
        accordionId={accordionId}
        variant="indigo"
        onClick={toggleCollapse('item-2')}
        downIcon={<PlusCircleIcon className="mt-1 h-4" />}
        upIcon={<MinusCircleIcon className="mt-1 h-4" />}
      >
        Accordion Group Item #2
      </AccordionHeader>
      <Accordion id="item-2" isOpen={accordionId}>
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
      <AccordionHeader
        id="item-3"
        accordionId={accordionId}
        variant="indigo"
        onClick={toggleCollapse('item-3')}
        downIcon={<PlusCircleIcon className="mt-1 h-4" />}
        upIcon={<MinusCircleIcon className="mt-1 h-4" />}
      >
        Accordion Group Item #3
      </AccordionHeader>
      <Accordion id="item-3" isOpen={accordionId}>
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

export const PlusCircleIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
  </svg>
);

export const MinusCircleIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
  </svg>
);