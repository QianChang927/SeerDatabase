package com.robot.core.manager
{
   import com.robot.core.behavior.ChatBehavior;
   import com.robot.core.behavior.IBehavior;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.mode.BasePeoleModel;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import org.taomee.ds.HashMap;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class UserManager
   {
      
      public static var isShow:Boolean = true;
      
      private static var _map:HashMap = new HashMap();
      
      private static var instance:EventDispatcher;
       
      
      public function UserManager()
      {
         super();
      }
      
      public static function destroy() : void
      {
         _map.eachValue(function(param1:BasePeoleModel):void
         {
            param1.stop();
            param1.destroy();
            param1 = null;
         });
         _map.clear();
      }
      
      public static function get length() : int
      {
         return _map.length;
      }
      
      public static function addUser(param1:uint, param2:BasePeoleModel) : BasePeoleModel
      {
         return _map.add(param1,param2);
      }
      
      public static function removeUser(param1:uint) : BasePeoleModel
      {
         return _map.remove(param1);
      }
      
      public static function getUserModel(param1:uint) : BasePeoleModel
      {
         if(param1 == MainManager.actorID)
         {
            return MainManager.actorModel;
         }
         return _map.getValue(param1);
      }
      
      public static function clear() : void
      {
         _map.eachValue(function(param1:Sprite):void
         {
            DisplayUtil.removeForParent(param1);
         });
         _map.clear();
      }
      
      public static function getUserIDList() : Array
      {
         return _map.getKeys();
      }
      
      public static function getUserModelList() : Array
      {
         return _map.getValues();
      }
      
      public static function contains(param1:uint) : Boolean
      {
         return _map.containsKey(param1);
      }
      
      public static function execBehavior(param1:uint, param2:IBehavior, param3:Boolean = false) : void
      {
         var isClothQilin:Boolean = false;
         var model:BasePeoleModel = null;
         var userID:uint = param1;
         var be:IBehavior = param2;
         var incActor:Boolean = param3;
         if(UserManager.getUserModel(userID))
         {
            if(be is ChatBehavior)
            {
               isClothQilin = UserManager.getUserModel(userID).isClothQilin();
               if((be as ChatBehavior)._msg.indexOf("新年快乐") != -1 && isClothQilin)
               {
                  ResourceManager.getResource(ClientConfig.getActiveUrl("firework"),function(param1:DisplayObject):void
                  {
                     var mc:MovieClip = null;
                     var obj:DisplayObject = param1;
                     mc = obj as MovieClip;
                     UserManager.getUserModel(userID).addChild(mc);
                     mc.parent.setChildIndex(mc,0);
                     mc.x = 110.6;
                     mc.y = -76.9;
                     mc.addFrameScript(mc.totalFrames - 1,function():void
                     {
                        mc.addFrameScript(mc.totalFrames - 1,null);
                        mc.stop();
                        DisplayUtil.removeForParent(mc);
                        mc = null;
                     });
                     mc.gotoAndPlay(1);
                  },"firework");
               }
            }
         }
         if(incActor)
         {
            if(userID == MainManager.actorID)
            {
               MainManager.actorModel.execBehavior(be);
               return;
            }
         }
         if(_map.containsKey(userID))
         {
            model = _map.getValue(userID);
            if(model)
            {
               model.execBehavior(be);
            }
         }
      }
      
      public static function getInstance() : EventDispatcher
      {
         if(instance == null)
         {
            instance = new EventDispatcher();
         }
         return instance;
      }
      
      public static function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         getInstance().addEventListener(param1,param2,param3,param4,param5);
      }
      
      public static function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         getInstance().removeEventListener(param1,param2,param3);
      }
      
      public static function dispatchEvent(param1:Event) : void
      {
         getInstance().dispatchEvent(param1);
      }
      
      public static function hasEventListener(param1:String) : Boolean
      {
         return getInstance().hasEventListener(param1);
      }
      
      public static function willTrigger(param1:String) : Boolean
      {
         return getInstance().willTrigger(param1);
      }
   }
}
