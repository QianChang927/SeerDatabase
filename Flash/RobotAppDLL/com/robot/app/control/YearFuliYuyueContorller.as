package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ResourceManager;
   
   public class YearFuliYuyueContorller
   {
      
      private static var _instance:com.robot.app.control.YearFuliYuyueContorller;
       
      
      private var mapid:int;
      
      private const npcPos:Array = [{
         "x":514,
         "y":320
      },{
         "x":514,
         "y":320
      },{
         "x":514,
         "y":320
      },{
         "x":514,
         "y":320
      },{
         "x":514,
         "y":320
      },{
         "x":514,
         "y":320
      }];
      
      private var mapids:Array;
      
      private const sources:Array = ["yuyuenpc1","yuyuenpc2","yuyuenpc3","yuyuenpc4","yuyuenpc5","yuyuenpc6"];
      
      private var mapidx:int;
      
      public function YearFuliYuyueContorller()
      {
         this.mapids = [1159,1187,10,1197,1192,1211];
         super();
      }
      
      public static function get instance() : com.robot.app.control.YearFuliYuyueContorller
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.control.YearFuliYuyueContorller();
         }
         return _instance;
      }
      
      public function changemapHandle(param1:int) : void
      {
         var mid:int = param1;
         this.mapid = mid;
         this.mapidx = this.mapids.indexOf(this.mapid);
         if(this.mapidx != -1)
         {
            if(MapManager.currentMap.id != this.mapid)
            {
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:* = null):void
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                  addNpc();
               });
               MapManager.changeMap(this.mapid);
            }
            else
            {
               this.addNpc();
            }
         }
      }
      
      private function addNpc() : void
      {
         getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(false);
         MapManager.currentMap.btnLevel.visible = false;
         if(Boolean(MapManager.currentMap) && MapManager.currentMap.controlLevel.getChildByName("yuyuenpc") == null)
         {
            ResourceManager.getResource(ClientConfig.getAppRes("mapobj/" + this.sources[this.mapidx]),function(param1:MovieClip):void
            {
               param1.buttonMode = true;
               param1.name = "yuyuenpc";
               param1.scaleX = param1.scaleY = 1.5;
               param1.x = npcPos[mapidx].x;
               param1.y = npcPos[mapidx].y;
               MapManager.currentMap.controlLevel.addChild(param1);
               param1.addEventListener(MouseEvent.CLICK,clickHandle);
            });
         }
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(this.mapidx)
         {
            case 0:
               NpcDialog.show(NPC.WANGZHIHAMO,[MainManager.actorInfo.nick + "，整个2016年，过的如何？或许你还记得在这里发生的一切，但这些都过去了，非常开心你还能记起我，我不需要你为我做什么，看到宇宙中依然存在的光辉，我就已然欣慰。"],["17年你有什么打算吗？"],[function():void
               {
                  NpcDialog.show(NPC.WANGZHIHAMO,["我将永远为正义而战。"],["加油！王之哈莫！"],[function():void
                  {
                     openui();
                  }]);
               }]);
               break;
            case 1:
               NpcDialog.show(NPC.DOUTIANWUSHEN_RUIERSI,[MainManager.actorInfo.nick + "，他们都说我所追求的力量，是一种暴力，可是我并不这么认为，我毕生都在追求力量的极限，这种极限可以让我舍弃很多其他没有用的情感。"],["会不会太孤注一掷？"],[function():void
               {
                  NpcDialog.show(NPC.DOUTIANWUSHEN_RUIERSI,["但你的敌人倒在你的拳下，你就会知道，多余的情感都是累赘。不过，既然来到了这里，就让我见证下你的实力！"],["果然还是要交手啊","稍等！"],[function():void
                  {
                     FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
                     {
                        FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                        if(param1.dataObj.winnerID == MainManager.actorInfo.userID)
                        {
                           openui();
                        }
                        else
                        {
                           addNpc();
                           NpcDialog.show(NPC.A_CAI,["怎么越来越差了？哈哈哈！"],["……"],[null]);
                        }
                     });
                     FightManager.fightNoMapBoss("",8552);
                  },null]);
               }]);
               break;
            case 2:
               NpcDialog.show(NPC.TIANTANG_JINYI_BOSIDIJIA,["我们会走很远很远，但就算再远，你总是会想起自己的出发点。"],["是的！"],[function():void
               {
                  NpcDialog.show(NPC.TIANTANG_JINYI_BOSIDIJIA,["不知道你对于以前的我了解多少，那我就来问问你吧。在我还是波波的时候，哪个技能可以更快协助你捕获精灵？"],["A.手下留情","B.狂风打击","C.翅膀冲击"," D.猛攻"],[function():void
                  {
                     openui();
                  },showdialog2,showdialog2,showdialog2]);
               }]);
               break;
            case 3:
               NpcDialog.show(NPC.TIAN_XIE_LONG_HUANG,[MainManager.actorInfo.nick + "，没想到我们还能见面吧，我们大暗黑天永远不会离开！"],["哼，你怎么这样跟我说话，我是常长老！"],[function():void
               {
                  NpcDialog.show(NPC.TIAN_XIE_LONG_HUANG,["哈哈哈哈！你知道，大暗黑天里的常长老，到底是谁吗？"],["不……不知道……"],[function():void
                  {
                     NpcDialog.show(NPC.TIAN_XIE_LONG_HUANG,["那你真的是胆子太大了！不过，你找我有什么事呢？"],["据说拜访6位明星精灵，我就可以预约礼包啦！"],[function():void
                     {
                        NpcDialog.show(NPC.TIAN_XIE_LONG_HUANG,["是嘛……没有想到，我也成为了明星精灵，我一直以为，我在你们眼里只是个失败者，但是经过那次决战，我觉得有句话需要修改一下。"],["什么话？"],[function():void
                        {
                           NpcDialog.show(NPC.TIAN_XIE_LONG_HUANG,["正义的无边蔓延必然会腐朽，其实正确的应该是，正义本身就是另一种腐朽。好了，你走吧，若是有机会，我会让你见识下真正的常长老。"],["好！"],[function():void
                           {
                              openui();
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
               break;
            case 4:
               NpcDialog.show(NPC.LEYI_KING,["哦？你见过天邪龙皇了？他真的是这么说的？"],["是的。"],[function():void
               {
                  NpcDialog.show(NPC.LEYI_KING,["那一战之后，我们战神联盟也元气大伤，现在每个人都在恢复身体，宇宙中的种种，总是要靠无数的精灵一起努力。你走吧，感谢你的出现。我们会尽快恢复身体，再次重出宇宙！"],["好！"],[function():void
                  {
                     openui();
                  }]);
               }]);
               break;
            case 5:
               LevelManager.iconLevel.visible = false;
               LevelManager.toolsLevel.visible = false;
               ResourceManager.getResource(ClientConfig.getMapAnimate("yearfuliyuyuemovie"),function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  LevelManager.topLevel.addChild(mc);
                  KTool.hideMapAllPlayerAndMonster();
                  AnimateManager.playMcAnimate(mc,1,"mc",function():void
                  {
                     mc.stop();
                     mc.parent.removeChild(mc);
                     LevelManager.iconLevel.visible = true;
                     LevelManager.toolsLevel.visible = true;
                     KTool.showMapAllPlayerAndMonster();
                     openui();
                  });
               });
         }
      }
      
      private function showdialog2() : void
      {
         NpcDialog.show(NPC.TIANTANG_JINYI_BOSIDIJIA,["不对哦！再想想。"],null,null,false,function():void
         {
            NpcDialog.show(NPC.TIANTANG_JINYI_BOSIDIJIA,["不知道你对于以前的我了解多少，那我就来问问你吧。在我还是波波的时候，哪个技能可以更快协助你捕获精灵？"],["A.手下留情","B.狂风打击","C.翅膀冲击"," D.猛攻"],[function():void
            {
               openui();
            },showdialog2,showdialog2,showdialog2]);
         });
      }
      
      private function openui() : void
      {
         SocketConnection.sendByQueue(43227,[7,this.mapidx + 1],function():void
         {
            getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl").hideOrShowAllObjects(true);
            MapManager.currentMap.btnLevel.visible = true;
            if(Boolean(MapManager.currentMap) && MapManager.currentMap.controlLevel.getChildByName("yuyuenpc") != null)
            {
               MapManager.currentMap.controlLevel.removeChild(MapManager.currentMap.controlLevel.getChildByName("yuyuenpc"));
            }
            Alarm.show("恭喜你拜访成功！");
            ModuleManager.showAppModule("YearFuliYuyueMainPanel");
         });
      }
   }
}
