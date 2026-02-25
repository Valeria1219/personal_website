'use client'

import { Button } from '@/components/ui/button'

export default function TagFilter({ categories, selectedCategory, onSelect }) {
  return (
    <div>
      {/* Categories */}
      {categories?.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => onSelect(null)}
              variant={!selectedCategory ? 'default' : 'secondary'}
              size="sm"
              className="px-3 py-1.5"
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category._id}
                onClick={() => onSelect(category._id)}
                variant={selectedCategory === category._id ? 'default' : 'secondary'}
                size="sm"
                className="px-3 py-1.5"
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
