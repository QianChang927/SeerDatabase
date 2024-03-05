package com.robot.core.aticon
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SpecialXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.EmptySkeletonStrategy;
   import com.robot.core.utils.Direction;
   import flash.display.MovieClip;
   import gs.TweenLite;
   import gs.easing.Bounce;
   
   public class PeculiarAction
   {
       
      
      public function PeculiarAction()
      {
         super();
      }
      
      public function execute(param1:BasePeoleModel, param2:String, param3:Boolean = true) : void
      {
         var id:uint = 0;
         var bodyMCArray:Array = null;
         var compose:MovieClip = null;
         var skeleton:EmptySkeletonStrategy = null;
         var num:uint = 0;
         var i:uint = 0;
         var mc:MovieClip = null;
         var obj:BasePeoleModel = param1;
         var dir:String = param2;
         var isNet:Boolean = param3;
         if(isNet)
         {
            SocketConnection.send(CommandID.DANCE_ACTION,10001,Direction.strToIndex(obj.direction));
         }
         else
         {
            id = SpecialXMLInfo.getSpecialID(obj.info.clothIDs);
            if(id > 0)
            {
               obj.stop();
               obj.specialAction(id);
               return;
            }
            bodyMCArray = [];
            obj.sprite.addEventListener(RobotEvent.WALK_START,function(param1:RobotEvent):void
            {
               var _loc3_:MovieClip = null;
               obj.sprite.removeEventListener(RobotEvent.WALK_START,arguments.callee);
               if(obj.info.userID == MainManager.actorID)
               {
                  if(obj.pet)
                  {
                     if(PetXMLInfo.isFlyPet(obj.pet.info.petID))
                     {
                        return;
                     }
                     if(PetXMLInfo.isRidePetOpen(obj.pet.info.petID,obj.info))
                     {
                        return;
                     }
                  }
               }
               for each(_loc3_ in bodyMCArray)
               {
                  TweenLite.to(_loc3_,0.2,{
                     "alpha":1,
                     "scaleX":1,
                     "scaleY":1
                  });
               }
               TweenLite.to(compose,0.5,{
                  "y":-21.4,
                  "ease":Bounce.easeOut
               });
            });
            obj.stop();
            obj.direction = dir;
            skeleton = obj.skeleton as EmptySkeletonStrategy;
            compose = skeleton.getBodyMC();
            num = uint(compose.numChildren);
            i = 0;
            while(i < num)
            {
               mc = compose.getChildAt(i) as MovieClip;
               if(mc.name != "cloth" && mc.name != "color" && mc.name != "waist" && mc.name != "head" && mc.name != "decorator")
               {
                  bodyMCArray.push(mc);
                  TweenLite.to(mc,0.2,{
                     "alpha":0,
                     "scaleX":0,
                     "scaleY":0
                  });
               }
               i++;
            }
            TweenLite.to(compose,0.5,{
               "y":-8,
               "ease":Bounce.easeOut
            });
         }
      }
      
      public function keepUp(param1:EmptySkeletonStrategy, param2:Number) : void
      {
         var _loc6_:MovieClip = null;
         if(param1 == null)
         {
            return;
         }
         var _loc3_:MovieClip = param1.getBodyMC();
         var _loc4_:uint = uint(_loc3_.numChildren);
         var _loc5_:uint = 0;
         while(_loc5_ < _loc4_)
         {
            if((_loc6_ = _loc3_.getChildAt(_loc5_) as MovieClip).name != "cloth" && _loc6_.name != "color" && _loc6_.name != "waist" && _loc6_.name != "head" && _loc6_.name != "decorator")
            {
               TweenLite.to(_loc6_,0.2,{
                  "alpha":0,
                  "scaleX":0,
                  "scaleY":0
               });
            }
            _loc5_++;
         }
         TweenLite.to(_loc3_,0.2,{
            "y":param2,
            "ease":Bounce.easeOut
         });
         if(param1.people)
         {
            (param1.people as BasePeoleModel).topIconY = param2 - 48.6;
         }
      }
      
      public function standUp(param1:EmptySkeletonStrategy) : void
      {
         var _loc5_:MovieClip = null;
         if(param1 == null)
         {
            return;
         }
         var _loc2_:MovieClip = param1.getBodyMC();
         var _loc3_:uint = uint(_loc2_.numChildren);
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            if((_loc5_ = _loc2_.getChildAt(_loc4_) as MovieClip).name != "cloth" && _loc5_.name != "color" && _loc5_.name != "waist" && _loc5_.name != "head" && _loc5_.name != "decorator")
            {
               TweenLite.to(_loc5_,0.2,{
                  "alpha":1,
                  "scaleX":1,
                  "scaleY":1
               });
            }
            _loc4_++;
         }
         TweenLite.to(_loc2_,0.5,{
            "y":-21.4,
            "ease":Bounce.easeOut
         });
         if(param1.people)
         {
            (param1.people as BasePeoleModel).topIconY = -70;
         }
      }
   }
}
