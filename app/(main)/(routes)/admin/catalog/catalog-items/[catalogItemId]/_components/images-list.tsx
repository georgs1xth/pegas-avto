"use client";

import { ImageSrcMultiple } from "@prisma/client";
import { useEffect, useLayoutEffect, useState } from "react";
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult
} from "@hello-pangea/dnd"

import { cn } from "@/lib/utils";
import { Grid, Grip, Pencil, Trash2, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";


interface ImagesListProps {
    items: ImageSrcMultiple[];
    onReorder: (updateData: { id: string; position: number }[]) => void;
    onDelete: (id: string) => void
}



export const ImagesList = ({
    items,
    onReorder,
    onDelete
}: ImagesListProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const [images, setImages] = useState(items);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useLayoutEffect(() => {
        setImages(items)
    }, [items])

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const items = Array.from(images);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        const startIndex = Math.min(result.source.index, result.destination.index);
        const endIndex = Math.max(result.source.index, result.destination.index);

        const updatedImages = items.slice(startIndex, endIndex + 1);

        setImages(items);

        const bulkUpdateData = updatedImages.map((image) => ({
            id: image.id,
            position: items.findIndex((item) => item.id === image.id)
        }));

        onReorder(bulkUpdateData)
    }

    if (!isMounted) {
        return null;
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="images">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {images.map((image, index) => (
                            <Draggable 
                                key={image.id} 
                                draggableId={image.id} 
                                index={index}
                                >
                                    {(provided) => (
                                        <div 
                                            className={cn(
                                                "flex items-center gap-x-2 bg-accent-foreground border-accent-foreground border rounded-md mb-4 text-sm",
                                                "bg-accent border-accent-foreground/30 text-accent-foreground"
                                            )}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                        >
                                            <div
                                                className={cn(
                                                    "px-2 py-3 border-r border-r-accent-foreground/30 hover:bg-accent-foreground/20 rounded-l-md transition",
                                                    "border-accent-foreground/30 hover:bg-accent-foreground/20"
                                                )}
                                                {...provided.dragHandleProps}
                                            >
                                                <Grip 
                                                    className="h-5 w-5"
                                                />
                                            </div>
                                            {image.name}
                                            <div className="ml-auto pr-2 flex items-center gap-x-2">
                                                <X
                                                    onClick={() => onDelete(image.id)}
                                                    className="w-4 h-4 cursor-pointer hover:opacity-75 transition"
                                                />
                                            </div>
                                        </div>
                                    )}

                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}