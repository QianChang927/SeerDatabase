package com.robot.core.info
{
   import org.taomee.ds.HashMap;
   
   public class SignIconInfo
   {
       
      
      private var _id:int;
      
      private var _className:String;
      
      private var _isShowNum:Boolean;
      
      private var _tips:String;
      
      private var _des:String;
      
      private var _iconName:String;
      
      private var _sptips:String;
      
      private var _spDes:String;
      
      private var _titleDes:String;
      
      private var _sptipsHashMap:HashMap;
      
      private var _spDesHashMap:HashMap;
      
      public function SignIconInfo()
      {
         this._sptipsHashMap = new HashMap();
         this._spDesHashMap = new HashMap();
         super();
      }
      
      public function NewTeamTaskInfo() : void
      {
      }
      
      public function get id() : int
      {
         return this._id;
      }
      
      public function set id(param1:int) : void
      {
         this._id = param1;
      }
      
      public function get className() : String
      {
         return this._className;
      }
      
      public function set className(param1:String) : void
      {
         this._className = param1;
      }
      
      public function set iconName(param1:String) : void
      {
         this._iconName = param1;
      }
      
      public function get iconName() : String
      {
         return this._iconName;
      }
      
      public function get isShowNum() : Boolean
      {
         return this._isShowNum;
      }
      
      public function set isShowNum(param1:Boolean) : void
      {
         this._isShowNum = param1;
      }
      
      public function get tips() : String
      {
         return this._tips;
      }
      
      public function set tips(param1:String) : void
      {
         this._tips = param1;
      }
      
      public function get sptips() : String
      {
         return this._sptips;
      }
      
      public function set sptips(param1:String) : void
      {
         this._sptips = param1;
      }
      
      public function set des(param1:String) : void
      {
         this._des = param1;
      }
      
      public function get des() : String
      {
         return this._des;
      }
      
      public function set spDes(param1:String) : void
      {
         this._spDes = param1;
      }
      
      public function get spDes() : String
      {
         return this._spDes;
      }
      
      public function set sptipsHashMap(param1:HashMap) : void
      {
         this._sptipsHashMap = param1;
      }
      
      public function get sptipsHashMap() : HashMap
      {
         return this._sptipsHashMap;
      }
      
      public function set spDesHashMap(param1:HashMap) : void
      {
         this._spDesHashMap = param1;
      }
      
      public function get spDesHashMap() : HashMap
      {
         return this._spDesHashMap;
      }
      
      public function set titleDes(param1:String) : void
      {
         this._titleDes = param1;
      }
      
      public function get titleDes() : String
      {
         return this._titleDes;
      }
   }
}
