﻿using System.ComponentModel.DataAnnotations;

namespace TeisterMask.Models
{
    public class Task
    {
	    [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Status { get; set; }
    }
}