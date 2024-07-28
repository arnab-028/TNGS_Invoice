import { FC, useEffect, useState } from 'react';

// Mui icons.
import ContactPageIcon from '@mui/icons-material/ContactPage';

// Base components.
import { SectionTitle, Typography, Box, EditableAreaMarker, EditableAreaWrapper } from '@/components/base';

// Hooks.
import { useGenerator } from '@/hooks/useGenerator';

// Utilities.
import { createSpacing } from '@/utils';

// Interfaces.
import { IInvoiceRecipient } from '@/interfaces/invoice';
import InvoiceEditableContentNoData from './invoice-editable/invoice-editable-content-no-data';

interface Props {
  recipient: IInvoiceRecipient;
  handleOpenDialog?: () => void;
}

const InvoiceRecipient: FC<Props> = ({ recipient, handleOpenDialog }) => {
  const { editable } = useGenerator();
  const [localRecipient, setLocalRecipient] = useState<IInvoiceRecipient | null>(null);

  useEffect(() => {
    setLocalRecipient(null);
  }, []);

  useEffect(() => {
    if (recipient) {
      setLocalRecipient(recipient);
    }
  }, [recipient]);

  const checkProperties = (obj: Record<string, string>): boolean => {
    for (const key in obj) {
      if (obj[key] !== null && obj[key] !== '') return true;
    }
    return false;
  };

  const hasRecipient = (): boolean => {
    return localRecipient ? checkProperties(localRecipient as unknown as Record<string, string>) : false;
  };

  return (
    <EditableAreaWrapper>
      <Box style={{ position: 'relative', zIndex: 1 }} onClick={handleOpenDialog as () => void}>
        <SectionTitle>BILLED TO :</SectionTitle>
        {hasRecipient() ? (
          <>
            {localRecipient?.companyName && (
              <Box>
                <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: editable ? 1 : createSpacing(1) }}>
                  {localRecipient.companyName}
                </Typography>
              </Box>
            )}
            <Typography>
              <>
                {localRecipient?.addressLine1 ? localRecipient.addressLine1 + ', ' : null}
                {localRecipient?.addressLine2 || null}
              </>
            </Typography>
            <Typography>
              <>
                {localRecipient?.city ? localRecipient.city + ', ' : null}
                {localRecipient?.state || null}
              </>
            </Typography>
            <Typography>{localRecipient?.country || null}</Typography>
            <Typography>{localRecipient?.postalCode || null}</Typography>
            <Typography>{localRecipient?.email || null}</Typography>
            <Typography>{localRecipient?.phone || null}</Typography>
          </>
        ) : editable ? (
          <InvoiceEditableContentNoData
            title="Recipient"
            subtitle="Add invoice recipient details"
            icon={<ContactPageIcon />}
          />
        ) : null}
      </Box>
      {editable && <EditableAreaMarker />}
    </EditableAreaWrapper>
  );
};

export default InvoiceRecipient;