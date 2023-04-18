import { useIntl } from 'react-intl';

const useGetListOfAdvantages = () => {
  const intl = useIntl();

  return [
    {
      key: 'first',
      text: intl.formatMessage({ id: 'DESCRIPTION.BOTTOM_SECTION.LIST.FIRST' }),
    },
    {
      key: 'second',
      text: intl.formatMessage({
        id: 'DESCRIPTION.BOTTOM_SECTION.LIST.SECOND',
      }),
    },
    {
      key: 'third',
      text: intl.formatMessage({ id: 'DESCRIPTION.BOTTOM_SECTION.LIST.THIRD' }),
    },
    {
      key: 'fourth',
      text: intl.formatMessage({
        id: 'DESCRIPTION.BOTTOM_SECTION.LIST.FOURTH',
      }),
    },
    {
      key: 'fifth',
      text: intl.formatMessage({ id: 'DESCRIPTION.BOTTOM_SECTION.LIST.FIFTH' }),
    },
    {
      key: 'sixth',
      text: intl.formatMessage({ id: 'DESCRIPTION.BOTTOM_SECTION.LIST.SIXTH' }),
    },
  ];
};

export default useGetListOfAdvantages;
