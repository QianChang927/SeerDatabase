package com.robot.app2.email
{
   public class EmailLinkInfo
   {
       
      
      private var _linkId:int;
      
      private var _mid:int;
      
      private var _sender:String;
      
      private var _cParam:Object;
      
      private var _sParam:Object;
      
      public function EmailLinkInfo(param1:String, param2:int, param3:String)
      {
         super();
         this.parseLinkText(param1);
         this._mid = param2;
         this._sender = param3;
      }
      
      private function parseLinkText(param1:String) : void
      {
         var _loc2_:Array = EmailUtil.fetchBraceContent(param1);
         this._linkId = int(_loc2_[0]);
         this._sParam = _loc2_[1];
      }
      
      public function get linkId() : int
      {
         return this._linkId;
      }
      
      public function get mid() : int
      {
         return this._mid;
      }
      
      public function get sender() : String
      {
         return this._sender;
      }
      
      public function get cParam() : Object
      {
         return this._cParam;
      }
      
      public function set cParam(param1:Object) : void
      {
         this._cParam = param1;
      }
      
      public function get sParam() : Object
      {
         return this._sParam;
      }
      
      public function set sParam(param1:Object) : void
      {
         this._sParam = param1;
      }
   }
}
