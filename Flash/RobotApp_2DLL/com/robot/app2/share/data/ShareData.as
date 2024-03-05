package com.robot.app2.share.data
{
   public class ShareData
   {
       
      
      private var _shareType:String = "";
      
      private var _url:String = "";
      
      private var _title:String = "";
      
      private var _desc:String = "";
      
      private var _summary:String = "";
      
      private var _site:String = "";
      
      private var _flash:String = "";
      
      private var _pics:Array;
      
      public function ShareData()
      {
         this._pics = [];
         super();
      }
      
      public function set shareType(param1:String) : void
      {
         this._shareType = param1;
      }
      
      public function get shareType() : String
      {
         return this._shareType;
      }
      
      public function set url(param1:String) : void
      {
         this._url = param1;
      }
      
      public function get url() : String
      {
         return encodeURI(this._url);
      }
      
      public function set title(param1:String) : void
      {
         this._title = param1;
      }
      
      public function get title() : String
      {
         return encodeURI(this._title);
      }
      
      public function set desc(param1:String) : void
      {
         this._desc = param1;
      }
      
      public function get desc() : String
      {
         return encodeURI(this._desc);
      }
      
      public function set summary(param1:String) : void
      {
         this._summary = param1;
      }
      
      public function get summary() : String
      {
         return encodeURI(this._summary);
      }
      
      public function set site(param1:String) : void
      {
         this._site = param1;
      }
      
      public function get site() : String
      {
         return encodeURI(this._site);
      }
      
      public function set flash(param1:String) : void
      {
         this._flash = param1;
      }
      
      public function get flash() : String
      {
         return encodeURI(this._flash);
      }
      
      public function set pics(param1:Array) : void
      {
         this._pics = [];
         var _loc2_:int = 0;
         while(_loc2_ < param1.length)
         {
            this._pics.push(escape(param1[_loc2_]));
            _loc2_++;
         }
      }
      
      public function get pics() : Array
      {
         return this._pics;
      }
   }
}
