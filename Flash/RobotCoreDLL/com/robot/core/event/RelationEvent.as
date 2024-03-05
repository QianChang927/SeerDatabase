package com.robot.core.event
{
   import flash.events.Event;
   
   public class RelationEvent extends Event
   {
      
      public static const FRIEND_ADD:String = "friendAdd";
      
      public static const FRIEND_ACCEPT:String = "friendAccept";
      
      public static const FRIEND_REFUSE:String = "friendRefuse";
      
      public static const DEAL_FRIEND_APLY:String = "deal_friend_aply";
      
      public static const FRIEND_REMOVE:String = "friendRemove";
      
      public static const FRIEND_UPDATE_ONLINE:String = "friendUpDateOnLine";
      
      public static const UPDATE_INFO:String = "upDateInfo";
      
      public static const BLACK_ADD:String = "blackAdd";
      
      public static const BLACK_REMOVE:String = "blackRemove";
      
      public static const BLACK_LIST:String = "blackList";
      
      public static var RECOMMEND_REMOVE:String = "recommend_remove";
      
      public static var RELATION_CHANGE:String = "RELATION_CHANGE";
       
      
      private var _userID:uint;
      
      private var _obj:Object;
      
      public function RelationEvent(param1:String, param2:uint = 0, param3:Object = null)
      {
         super(param1,false,false);
         this._userID = param2;
         this._obj = param3;
      }
      
      public function get userID() : uint
      {
         return this._userID;
      }
      
      public function get obj() : Object
      {
         return this._obj;
      }
   }
}
