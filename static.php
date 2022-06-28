<?php 


class Student 
{
	public $count;

	public static $count_static;

	public function __construct(){
		$this->count = 1;
	}

	public function getCount(){
		return $this->count;
	}

	public static function get()
	{	
		// $test = self::$count_static++;
		Student::$newkar = 56;
		Student::$count_static = self::$count_static ? ++self::$count_static : 1;
		return Student::$count_static;
	}
	
}

$student = new Student();
// print_r($student);
// echo $student->getCount();

// Student::$count_static = 1;

Student::get();
Student::get();
Student::get();
// echo Student::get();
echo Student::$newkar;



