package com.robot.app.mapProcess
{
   import com.robot.app.control.SpaceArenaController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.Direction;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.manager.ResourceManager;
   
   public class SpaceArena extends BaseMapProcess
   {
      
      public static var hasInit:Boolean = false;
       
      
      private var petA:MovieClip;
      
      private var petB:MovieClip;
      
      public function SpaceArena()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel["text"].visible = false;
         topLevel["light"].visible = false;
         animatorLevel["light"].visible = false;
         this.initMap();
         ToolBarController.panel.hide();
         LevelManager.closeMouseEvent();
         LevelManager.iconLevel.visible = false;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onFightComplete);
      }
      
      private function initMap() : void
      {
         if(hasInit)
         {
            return;
         }
         hasInit = true;
         if(SpaceArenaController.isEnd)
         {
            SpaceArenaController.showAlarm(SpaceArenaController.isWin,SpaceArenaController.resultPoint);
            return;
         }
         if(SpaceArenaController.isBoss == 0)
         {
            topLevel["text"].visible = true;
            topLevel["text"]["num"].gotoAndStop(SpaceArenaController.round + 1);
            AnimateManager.playMcAnimate(topLevel["text"],0,"",function():void
            {
               topLevel["text"].visible = false;
               topLevel["light"].visible = true;
               animatorLevel["light"].visible = true;
               loadPetA();
               loadPetB();
            });
         }
         else
         {
            AnimateManager.playMcAnimate(conLevel["boss"],0,"",function():void
            {
               Alert.show("强大的吉尼萨前来闹事，决不能让它继续猖狂，要挑战它吗？！",function():void
               {
                  FightManager.fightWithBoss("吉尼萨",0);
               },function():void
               {
                  SpaceArenaController.levelRoom();
               });
            });
         }
      }
      
      private function loadPetA() : void
      {
         ResourceManager.getResource(ClientConfig.getPetSwfPath(SpaceArenaController.pet_0.shift()),function(param1:DisplayObject):void
         {
            petA = param1 as MovieClip;
            setAction(petA,false,Direction.RIGHT);
            petA.x = 136;
            petA.y = 200;
            conLevel.addChild(petA);
            if(Boolean(petA) && Boolean(petB))
            {
               startWalk();
            }
         },"pet");
      }
      
      private function loadPetB() : void
      {
         ResourceManager.getResource(ClientConfig.getPetSwfPath(SpaceArenaController.pet_1.shift()),function(param1:DisplayObject):void
         {
            petB = param1 as MovieClip;
            setAction(petB,false,Direction.LEFT);
            petB.x = 828;
            petB.y = 200;
            conLevel.addChild(petB);
            if(Boolean(petA) && Boolean(petB))
            {
               startWalk();
            }
         },"pet");
      }
      
      private function setAction(param1:MovieClip, param2:Boolean, param3:String) : void
      {
         var pet:MovieClip = param1;
         var action:Boolean = param2;
         var direction:String = param3;
         pet.gotoAndStop(direction);
         pet.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            var _loc3_:MovieClip = pet.getChildAt(0) as MovieClip;
            if(_loc3_)
            {
               pet.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               if(action)
               {
                  _loc3_.play();
               }
               else
               {
                  _loc3_.gotoAndStop(1);
               }
            }
         });
      }
      
      private function startWalk() : void
      {
         var t1:uint = 0;
         var t2:uint = 0;
         var t3:uint = 0;
         this.setAction(this.petA,true,Direction.RIGHT);
         this.setAction(this.petB,true,Direction.LEFT);
         TweenLite.to(this.petA,0.5,{
            "x":224,
            "y":200
         });
         TweenLite.to(this.petB,0.5,{
            "x":740,
            "y":200
         });
         t1 = setTimeout(function():void
         {
            TweenLite.to(petA,0.5,{
               "x":336,
               "y":246
            });
            TweenLite.to(petB,0.5,{
               "x":628,
               "y":246
            });
            clearTimeout(t1);
         },500);
         t2 = setTimeout(function():void
         {
            TweenLite.to(petA,0.5,{
               "x":446,
               "y":246
            });
            TweenLite.to(petB,0.5,{
               "x":518,
               "y":246
            });
            clearTimeout(t2);
         },1000);
         t3 = setTimeout(function():void
         {
            SpaceArenaController.readyForFight();
            clearTimeout(t3);
         },1500);
      }
      
      private function onFightComplete(param1:PetFightEvent) : void
      {
         var _loc2_:FightOverInfo = null;
         hasInit = false;
         if(SpaceArenaController.isBoss == 0)
         {
            _loc2_ = param1.dataObj as FightOverInfo;
            if(_loc2_.winnerID == MainManager.actorID)
            {
               ++SpaceArenaController.num_0;
            }
            else
            {
               ++SpaceArenaController.num_1;
            }
            conLevel["num_0"].gotoAndStop(SpaceArenaController.num_0 + 1);
            conLevel["num_1"].gotoAndStop(SpaceArenaController.num_1 + 1);
            ++SpaceArenaController.round;
            this.initMap();
         }
         else
         {
            SpaceArenaController.levelRoom();
         }
      }
      
      override public function destroy() : void
      {
         this.petA = null;
         this.petB = null;
         ToolBarController.panel.show();
         LevelManager.openMouseEvent();
         LevelManager.iconLevel.visible = true;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightComplete);
      }
   }
}
