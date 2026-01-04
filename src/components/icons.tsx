import { EnvelopeClosedIcon, EnvelopeOpenIcon, FileTextIcon, PaperPlaneIcon, ReaderIcon } from '@radix-ui/react-icons';

interface IconProps {
    className?: string;
}

const MailIcon: React.FC<IconProps> = ({ className }) => (
    <>
        <EnvelopeClosedIcon className={`mail-closed group-hover:hidden ${className}`} />
        <EnvelopeOpenIcon className={`mail-open hidden group-hover:block ${className}`} />
    </>
);

const ResumeIcon: React.FC<IconProps> = ({ className }) => (
    <>
        <FileTextIcon className={`resume-filetext group-hover:hidden ${className}`} />
        <ReaderIcon className={`resume-reader hidden group-hover:block ${className}`} />
    </>
);

const SendIcon: React.FC<IconProps> = ({ className }) => (
    <PaperPlaneIcon className={`group-hover:-rotate-12 transition-transform duration-300 ${className}`} />
);

export { MailIcon, ResumeIcon, SendIcon };
