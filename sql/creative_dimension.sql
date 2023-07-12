-- Create Temporary Table to Calculate Aspect Ratio
CREATE TEMP TABLE temp_media AS
SELECT *,
       CAST(SPLIT_PART("resolution", 'x', 1) AS DECIMAL) / CAST(SPLIT_PART("resolution", 'x', 2) AS DECIMAL) AS "aspect_ratio"
FROM media;

-- Create Creative Dimension View
CREATE TABLE creative_dimension AS
SELECT m1.*, -- Include all original fields from the media table
       CASE
           WHEN m1.resolution = m2.max_resolution THEN m1.resolution -- If the resolution matches the maximum resolution within the same aspect ratio, use the original resolution
           ELSE m2.max_resolution -- Otherwise, use the maximum resolution within the same aspect ratio
       END AS "creative_dimension"
FROM temp_media m1
JOIN (
    SELECT a.aspect_ratio, MAX(a.resolution) AS max_resolution
    FROM temp_media a
    GROUP BY a.aspect_ratio
) m2 ON m1.aspect_ratio = m2.aspect_ratio;

-- Cleanup: Drop the Temporary Table
--DROP TABLE IF EXISTS temp_media;
--SELECT * FROM creative_dimension 