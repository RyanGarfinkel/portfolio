'use client';

import { Cross1Icon, CalendarIcon, BookmarkIcon } from '@radix-ui/react-icons';
import courseHistory, { type Semester } from '../data/classes';
import { useEffect, useRef } from 'react';
import { IconNavButton } from './button';

interface CourseHistoryPopupProps {
    isOpen: boolean;
    onClose: () => void;
};

const CourseHistoryPopup = ({ isOpen, onClose }: CourseHistoryPopupProps) => {

    const dialogRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (isOpen)
        {
            document.body.style.overflow = 'hidden';

            contentRef.current?.focus();

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape')
                    onClose();
                else if (e.key === 'Tab')
                    e.preventDefault();
                else if (contentRef.current)
                {
                    const scrollAmount = 40;
                    if (e.key === 'ArrowDown')
                    {
                        e.preventDefault();
                        contentRef.current.scrollTop += scrollAmount;
                    }
                    else if (e.key === 'ArrowUp')
                    {
                        e.preventDefault();
                        contentRef.current.scrollTop -= scrollAmount;
                    }
                }
            };

            document.addEventListener('keydown', handleKeyDown);

            return () => {
                document.body.style.overflow = '';
                document.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [isOpen, onClose]);

    if (!isOpen)
        return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget)
            onClose();
    };

    return (
        <div 
            className='course-history-backdrop'
            onClick={handleBackdropClick}
            role='dialog'
            aria-modal='true'
            aria-labelledby='course-history-title'
            aria-describedby='course-history-description'
        >
            <div 
                ref={dialogRef}
                className='course-history-dialog'
            >
                <div className='course-history-header'>
                    <div className='flex items-center gap-3'>
                        <div className='p-2 rounded-xl bg-primary/10' aria-hidden='true'>
                            <BookmarkIcon className='w-6 h-6 text-primary' />
                        </div>
                        <div>
                            <h2 id='course-history-title' className='text-2xl font-bold'>Course History</h2>
                            <p id='course-history-description' className='text-sm text-secondary'>Complete academic timeline</p>
                        </div>
                    </div>
                    <IconNavButton
                        ref={closeButtonRef}
                        icon={<Cross1Icon />}
                        onClick={onClose}
                        ariaLabel='Close course history dialog'
                    />
                </div>
                <div 
                    ref={contentRef}
                    className='course-history-content'
                    tabIndex={-1}
                    role='region'
                    aria-label='Course history by semester'
                >
                    <div className='course-history-grid'>
                        {courseHistory.map((semester: Semester, i) => (
                            <section 
                                key={i} 
                                className='semester-card'
                                aria-labelledby={`semester-${i}-title`}
                            >
                                <div className='semester-header'>
                                    <div className='flex items-center gap-2'>
                                        <CalendarIcon className='w-4 h-4 text-secondary' aria-hidden='true' />
                                        <h3 id={`semester-${i}-title`} className='text-lg font-semibold'>
                                            {semester.semester}
                                        </h3>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        {semester.isCurrent && (
                                            <span className='px-2 py-1 text-xs font-bold bg-green-500/20 text-green-600 dark:text-green-400 rounded-full' aria-label='Current semester'>
                                                Current
                                            </span>
                                        )}
                                        <span className='text-xs text-secondary font-mono' aria-label={`${semester.courses.length} courses in this semester`}>
                                            {semester.courses.length} {semester.courses.length === 1 ? 'course' : 'courses'}
                                        </span>
                                    </div>
                                </div>
                                <ul className='space-y-2.5' aria-label={`Courses for ${semester.semester}`}>
                                    {semester.courses.map((course, j) => (
                                        <li
                                            key={j}
                                            className='course-item'
                                        >
                                            <span className='course-code' aria-label={`Course code ${course.prefix}`}>
                                                {course.prefix}
                                            </span>
                                            <p className='text-sm text-secondary leading-relaxed pt-0.5'>
                                                {course.name}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseHistoryPopup;
