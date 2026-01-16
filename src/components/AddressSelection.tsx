'use client';

import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AddressSelectionProps {
  /**
   * Field name for form submission
   */
  name?: string;
  /**
   * Optional label for the address field
   */
  label?: string;
  /**
   * Optional placeholder text
   */
  placeholder?: string;
  /**
   * Required field indicator
   */
  required?: boolean;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Default value
   */
  defaultValue?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Callback when address changes
   */
  onAddressChange?: (address: string) => void;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Use iframe widget instead of text input (less recommended)
   */
  useIframe?: boolean;
  /**
   * Iframe height (only used if useIframe is true)
   */
  iframeHeight?: string;
}

/**
 * AddressSelection component - Better approach using text input with optional iframe fallback
 * 
 * RECOMMENDED: Use as a regular text input (default) - integrates with forms, validation, and accessibility
 * 
 * ALTERNATIVE: Set useIframe=true to use the Google Maps iframe widget (less control, harder to integrate)
 * 
 * For best UX, use the text input and consider upgrading to Google Places Autocomplete API later
 * if you need autocomplete suggestions.
 * 
 * @example
 * ```tsx
 * // Recommended: Text input (works with form validation)
 * <AddressSelection
 *   name="address"
 *   label="Property Address"
 *   required
 *   error={errors.address}
 * />
 * 
 * // Alternative: Iframe widget (if you specifically need the widget)
 * <AddressSelection
 *   label="Property Address"
 *   useIframe
 *   iframeHeight="400px"
 * />
 * ```
 */
export default function AddressSelection({
  name = 'address',
  label = 'Address',
  placeholder = 'Enter property address (e.g., 123 Main St, North Las Vegas, NV 89031)',
  required = false,
  error,
  defaultValue = '',
  disabled = false,
  onAddressChange,
  className = '',
  useIframe = false,
  iframeHeight = '400px',
}: AddressSelectionProps) {
  const [address, setAddress] = useState(defaultValue);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle iframe postMessage (if widget supports it)
  useEffect(() => {
    if (!useIframe) return;

    const handleMessage = (event: MessageEvent) => {
      // Verify origin for security
      if (
        event.origin !== 'https://storage.googleapis.com' &&
        !event.origin.includes('googleapis.com')
      ) {
        return;
      }

      // Handle address selection message
      if (event.data && typeof event.data === 'object') {
        if (event.data.type === 'address-selected' && event.data.address) {
          setAddress(event.data.address);
          onAddressChange?.(event.data.address);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [useIframe, onAddressChange]);

  // Handle text input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress(value);
    onAddressChange?.(value);
  };

  // Iframe version (less recommended)
  if (useIframe) {
    return (
      <div className={`space-y-2 ${className}`}>
        {label && (
          <Label htmlFor="address-selection">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </Label>
        )}
        
        <div
          ref={containerRef}
          className="relative w-full border border-gray-300 rounded-lg overflow-hidden bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
          style={{ height: iframeHeight }}
        >
          <iframe
            ref={iframeRef}
            id="address-selection"
            src="https://storage.googleapis.com/maps-solutions-c814y2wfed/address-selection/oyoh/address-selection.html"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title={label || 'Address selection'}
            aria-label={label || 'Address selection'}
            className="w-full h-full"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {placeholder && !error && (
          <p className="text-xs text-gray-500">{placeholder}</p>
        )}
      </div>
    );
  }

  // Text input version (RECOMMENDED - integrates with forms)
  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={name}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type="text"
        value={address}
        onChange={handleInputChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : undefined}
        className={error ? 'border-red-500 focus:ring-red-500' : ''}
      />
      {error && (
        <p id={`${name}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {!error && placeholder && (
        <p className="text-xs text-gray-500">{placeholder}</p>
      )}
    </div>
  );
}
