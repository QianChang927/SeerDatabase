package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.HitTest;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_1220 extends BaseMapProcess
   {
       
      
      private var isinactivity:Boolean = false;
      
      public function MapProcess_1220()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         conLevel["mc"]["line"].visible = false;
         conLevel["mc"]["npc"].visible = false;
         conLevel["mc"]["npc"].gotoAndStop(1);
         ToolTipManager.add(conLevel["changemap"],"塞西利亚星");
         if(_loc1_.fullYear == 2016 && _loc1_.month == 11 && _loc1_.date >= 16 && _loc1_.date < 23)
         {
            this.isinactivity = true;
            conLevel["mc"].visible = true;
         }
         else
         {
            conLevel["mc"].visible = false;
            this.isinactivity = false;
         }
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter);
         conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
      }
      
      private function onEnter(param1:RobotEvent) : void
      {
         if(!this.isinactivity)
         {
            return;
         }
         if(HitTest.complexHitTestObject(MainManager.actorModel,conLevel["mc"]["line"]))
         {
            StatManager.sendStat2014("1216塞西利亚星的冰雪王国","触发警戒线动画","2016运营活动");
            MainManager.actorModel.stopAutoWalk();
            this.playmapMovie();
         }
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var ename:String = String(event.target.name);
         var index:int = int(ename.split("_")[1]);
         switch(event.target.name)
         {
            case "adv":
               ModuleManager.showAppModule("KingdomoficeAdvPanel");
               break;
            case "guide":
               KTool.getMultiValue([18122],function(param1:Array):void
               {
                  var _loc2_:Boolean = true;
                  var _loc3_:int = 0;
                  while(_loc3_ < 7)
                  {
                     if(KTool.getBit(param1[0],_loc3_ + 1) == 0)
                     {
                        _loc2_ = false;
                        break;
                     }
                     _loc3_++;
                  }
                  if(_loc2_)
                  {
                     Alarm.show("你等了很久，貌似没有新的贵宾前来了。明天再来吧！");
                  }
                  else
                  {
                     ModuleManager.showAppModule("KingdomoficeguidePanel");
                  }
               });
               break;
            case "throne":
               ModuleManager.showAppModule("KingdomoficethronePanel");
               break;
            case "changemap":
               MapManager.changeMap(40);
               break;
            case "npc1":
               NpcDialog.show(NPC.JIADEMAN,["阿克希亚大人正在进行一次极为重要的蜕变，预计在12月23日，她将以完全体形态苏醒！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.JIADEMAN,["届时，许多重要的嘉宾均会到场……我要拿出最佳的精神面貌，欢迎他们的到来！"],["辛苦了！"],[function():void
                  {
                  }]);
               });
               break;
            case "npc2":
            case "npc3":
               NpcDialog.show(NPC.JIADEMAN,["阿克希亚大人正在进行一次极为重要的蜕变，预计在12月23日，她将以完全体形态苏醒！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.JIADEMAN,["届时正逢圣诞节，我们冰雪王国将会举行一场盛大的宴会，你可以前来参加"],["我一定会来的！"],[function():void
                  {
                  }]);
               });
               break;
            case "npc4":
               NpcDialog.show(NPC.ZHULIANSHI,["我是冰雪王国特邀的铸造师，特地为阿克希亚女皇打造最为华贵的冰封王座！可是我还缺一些材料，你能帮帮我吗？"],["没有问题！","我现在很忙。"],[function():void
               {
                  ModuleManager.showAppModule("KingdomoficethronePanel");
               },null]);
         }
      }
      
      private function playmapMovie() : void
      {
         LevelManager.closeMouseEvent();
         ResourceManager.getResource(ClientConfig.getMapAnimate("kingdomoficemovie5"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            mc.x = 233.4;
            mc.y = 52.9;
            if(MapManager.currentMap.controlLevel["mc"])
            {
               MapManager.currentMap.controlLevel["mc"]["npc1"].visible = false;
               MapManager.currentMap.controlLevel["mc"]["npc2"].visible = false;
               MapManager.currentMap.controlLevel["mc"]["npc3"].visible = false;
            }
            MapManager.currentMap.controlLevel.addChild(mc);
            mc.gotoAndStop(1);
            if(mc["mc"]["npc"])
            {
               mc["mc"]["npc"].gotoAndStop(2);
               mc["mc"]["npc"].visible = false;
            }
            AnimateManager.playMcAnimate(mc,1,"mc",function():void
            {
               mc.stop();
               if(MapManager.currentMap.controlLevel["mc"])
               {
                  MapManager.currentMap.controlLevel["mc"]["npc1"].visible = true;
                  MapManager.currentMap.controlLevel["mc"]["npc2"].visible = true;
                  MapManager.currentMap.controlLevel["mc"]["npc3"].visible = true;
               }
               mc.parent.removeChild(mc);
               LevelManager.openMouseEvent();
               LevelManager.iconLevel.visible = true;
               LevelManager.toolsLevel.visible = true;
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               NpcDialog.show(NPC.JIADEMAN,["你是什么人，请不要接近这里！我们奉阿克希亚大人的命令，在此守护！"],["发生了什么事情？"],[function():void
               {
                  NpcDialog.show(NPC.JIADEMAN,["阿克希亚大人正在进行一次极为重要的蜕变，预计在12月23日，她将以完全体形态苏醒！"],["哇，那可是喜事啊！"],[function():void
                  {
                     NpcDialog.show(NPC.JIADEMAN,["没错，届时正逢圣诞节，我们冰雪王国将会举行一场盛大的宴会，你可以前来参加！"],["我一定会来的！"],[function():void
                     {
                        MainManager.actorModel.x = 320;
                        MainManager.actorModel.y = 450;
                     }]);
                  }]);
               }]);
            });
         });
      }
      
      override public function destroy() : void
      {
         ToolTipManager.remove(conLevel["changemap"]);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter);
         conLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
