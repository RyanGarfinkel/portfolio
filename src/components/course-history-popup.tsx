'use client';

import { Cross1Icon, CalendarIcon, BookmarkIcon } from '@radix-ui/react-icons';
import courseHistory, { type Semester } from '../data/classes';
import { IconNavButton } from './button';

interface CourseHistoryPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const CourseHistoryPopup = ({ isOpen, onClose }: CourseHistoryPopupProps) => {
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300"
            onClick={handleBackdropClick}
        >
            <div className="container rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-2xl transform transition-all duration-300 scale-100">
                <div className="flex justify-between items-center p-6 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                            <BookmarkIcon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-primary">Academic Audit Log</h2>
                            <p className="text-sm text-secondary">Complete course history and progression</p>
                        </div>
                    </div>
                    <IconNavButton
                        icon={<Cross1Icon />}
                        onClick={onClose}
                        ariaLabel="Close audit log"
                    />
                </div>
                
                {/* Content */}
                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(85vh-140px)] p-6">
                    <div className="grid grid-cols-2 gap-8">
                        {courseHistory.map((semester: Semester, i) => (
                            <div key={i} className="group">
                                {/* Semester Header */}
                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <CalendarIcon className="w-4 h-4 text-primary/70" />
                                            <h3 className="text-lg font-semibold text-primary">
                                                {semester.semester}
                                            </h3>
                                        </div>
                                        {semester.isCurrent && (
                                            <span className="px-2 py-1 text-xs font-medium bg-green-600 text-white rounded-full">
                                                Current
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-xs text-secondary">
                                        {semester.courses.length} course{semester.courses.length !== 1 ? 's' : ''}
                                    </div>
                                </div>

                                {/* Course List */}
                                <div className="space-y-3">
                                    {semester.courses.map((course, j) => (
                                        <div
                                            key={j}
                                            className="group/course"
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="text-xs font-mono text-primary/70 px-2 py-1 rounded border border-primary/20 w-24 text-center shrink-0">
                                                    {course.prefix}
                                                </span>
                                                <h4 className="text-sm font-medium text-primary leading-snug">
                                                    {course.name}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseHistoryPopup;
