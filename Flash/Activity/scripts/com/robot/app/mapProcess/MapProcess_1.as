package com.robot.app.mapProcess
{
   import com.robot.app.mapProcess.control.HonorsHallController;
   import com.robot.app.task.control.TasksController;
   import com.robot.app.task.taskscollection.Task568;
   import com.robot.app.task.taskscollection.Task605;
   import com.robot.app.task.taskscollection.Task628;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ServerMapsXMLInfo;
   import com.robot.core.controller.NewSceneActivityController;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.MapStoryManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.getDefinitionByName;
   import gs.TweenLite;
   import org.taomee.manager.EventManager;
   
   public class MapProcess_1 extends BaseMapProcess
   {
       
      
      private var _curOject:*;
      
      private var _doorArr:Array;
      
      private var _doorPosArr:Array;
      
      private var defaultId:int;
      
      private var _gotoArr:Array;
      
      private var _gotoPosArr:Array;
      
      private var isEndStory:Boolean = false;
      
      public function MapProcess_1()
      {
         this._doorArr = [5];
         this._doorPosArr = [{
            "x":165,
            "y":300
         }];
         this._gotoArr = [103,this.defaultId,"经典精灵",1095];
         this._gotoPosArr = [{
            "x":380,
            "y":270
         },{
            "x":443,
            "y":230
         },{
            "x":555,
            "y":218
         },{
            "x":678,
            "y":231
         },{
            "x":778,
            "y":258
         }];
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         Task605.initTask_1(this);
         Task568.initTask_1(this);
         Task628.checkSeer();
         getDefinitionByName("com.robot.app2.control.ChristmasSnowController").initMap(this);
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.animatorLevel["mc"].visible = false;
         var _loc1_:Date = new Date(2019,1,8);
         if(SystemTimerManager.time >= _loc1_.time)
         {
            this.defaultId = 1351;
            this._gotoArr[1] = this.defaultId;
         }
         else
         {
            this.defaultId = ServerMapsXMLInfo.getLoginMapId(2);
            this._gotoArr[1] = this.defaultId;
         }
         EventManager.addEventListener(MapStoryManager.ON_MAP_STORY_Quit,this.onStoryQuit);
         EventManager.addEventListener(MapStoryManager.ON_MAP_STORY_START,this.onStoryStart);
         conLevel["playerPos"].visible = false;
         if(MapStoryManager.IsInStory)
         {
            this.onStoryStart();
         }
         else
         {
            this.onStoryQuit();
         }
         getDefinitionByName("com.robot.app2.mapProcess.control.SceneEasterEggController").initMap(this);
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         this._curOject = param1.target;
         var _loc2_:String = String(param1.target.name);
         var _loc3_:int = int(_loc2_.split("_")[1]);
         switch(_loc2_)
         {
            case "gotoBtn_" + _loc3_:
               MainManager.actorModel.walkAction(new Point(this._gotoPosArr[_loc3_].x,this._gotoPosArr[_loc3_].y));
               MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onGotoEnter);
               break;
            case "doorBtn_" + _loc3_:
               MainManager.actorModel.walkAction(new Point(this._doorPosArr[_loc3_].x,this._doorPosArr[_loc3_].y));
               MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onDoorEnter);
         }
      }
      
      private function onGotoEnter(param1:RobotEvent) : void
      {
         var index:int = 0;
         var i:int = 0;
         var e:RobotEvent = param1;
         var str:String = String(this._curOject.name);
         index = int(str.split("_")[1]);
         if(Point.distance(MainManager.actorModel.pos,new Point(this._gotoPosArr[index].x,this._gotoPosArr[index].y)) < 20)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onGotoEnter);
            this.animatorLevel["mc"].visible = true;
            i = 0;
            while(i < 4)
            {
               this.animatorLevel["mc"]["playMc_" + i].visible = false;
               i++;
            }
            this.animatorLevel["mc"]["playMc_" + index].visible = true;
            AnimateManager.playMcAnimate(this.animatorLevel["mc"],1,"playMc_" + index,function():void
            {
               if(_gotoArr[index] is int)
               {
                  MapManager.changeMap(_gotoArr[index]);
                  if(index == 0)
                  {
                     StatManager.sendStat2014("传送舱改版","瞭望露台","推送机制重做");
                  }
                  else if(index == 1)
                  {
                     StatManager.sendStat2014("传送舱改版","新的旅途","推送机制重做");
                  }
                  else if(index == 3)
                  {
                     StatManager.sendStat2014("传送舱改版","巅峰圣战","推送机制重做");
                  }
               }
               else if(_gotoArr[index] == "经典精灵")
               {
                  StatManager.sendStat2014("传送舱改版","经典精灵","推送机制重做");
                  MapManager.changeMapWithCallback(1096,function():void
                  {
                     NewSceneActivityController.getinstance().getactivitysByType(-1,0,1).then(function(param1:Array):void
                     {
                        ModuleManager.showAppModule("SceneActivityClassicalPanel",{
                           "arr":param1,
                           "isclassical":1
                        });
                     });
                  });
               }
               else
               {
                  ModuleManager.showModule(ClientConfig.getAppModule(_gotoArr[index]),"正在打开....");
               }
            },false,true);
         }
      }
      
      private function onDoorEnter(param1:RobotEvent) : void
      {
         var _loc2_:String = String(this._curOject.name);
         var _loc3_:int = int(_loc2_.split("_")[1]);
         if(Point.distance(MainManager.actorModel.pos,new Point(this._doorPosArr[_loc3_].x,this._doorPosArr[_loc3_].y)) < 20)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onDoorEnter);
            if(this._doorArr[_loc3_] is int)
            {
               StatManager.sendStat2014("传送舱改版","精灵中心","推送机制重做");
               MapManager.changeMap(this._doorArr[_loc3_]);
            }
            else
            {
               ModuleManager.showModule(ClientConfig.getAppModule(this._doorArr[_loc3_]),"正在打开....");
            }
         }
      }
      
      private function afterPlayGo() : void
      {
      }
      
      private function onClickGuide(param1:Event) : void
      {
         var e:Event = param1;
         NpcDialog.show(NPC.WEIBING_NEW,[" 嗨，" + MainManager.actorInfo.formatNick + "，赛尔号可是有着多种多样的玩法哦！你对自己的实力有信心吗，那就来选择自己喜欢的挑战类型，尽情战斗吧！"],["我想试试各种挑战","我再四处看看"],[function():void
         {
            HonorsHallController.openPanel(1);
         },function():void
         {
            HonorsHallController.openPanel(2);
         }]);
      }
      
      override public function destroy() : void
      {
         EventManager.removeEventListener(MapStoryManager.ON_MAP_STORY_Quit,this.onStoryQuit);
         EventManager.removeEventListener(MapStoryManager.ON_MAP_STORY_START,this.onStoryStart);
         conLevel["PaiTe"].removeEventListener(MouseEvent.CLICK,this.PaiTeDialog);
         conLevel["LuoJie"].removeEventListener(MouseEvent.CLICK,this.LuoJieDialog);
         conLevel["NiuSi"].removeEventListener(MouseEvent.CLICK,this.NiuSiDialog);
         conLevel["Alice"].removeEventListener(MouseEvent.CLICK,this.AliceDialog);
         Task605.destroy();
         Task568.destory();
         getDefinitionByName("com.robot.app2.control.ChristmasSnowController").destroy();
         getDefinitionByName("com.robot.app2.control.ChristmasActivitiesController").destroy();
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onGotoEnter);
         getDefinitionByName("com.robot.app2.mapProcess.control.SceneEasterEggController").destroy();
         super.destroy();
      }
      
      private function onStoryStart(param1:* = null) : void
      {
         var e:* = param1;
         conLevel["playerPos"].x -= 40;
         conLevel["playerPos"].y -= 40;
         MainManager.actorModel.sprite.x = conLevel["playerPos"].x + 40;
         MainManager.actorModel.sprite.y = conLevel["playerPos"].y + 40;
         MapStoryManager.playerMoveToMc(conLevel["playerPos"]);
         if(MapStoryManager.StoryProgress == 16)
         {
            MapStoryManager.dialog(165,45,function():void
            {
               ModuleManager.showAppModule("MapStoryScreenView",{
                  "acId":165,
                  "numId":46,
                  "callback":function():void
                  {
                     MapStoryManager.dialog(165,47,function():void
                     {
                        isEndStory = true;
                        MapStoryManager.recoverSeerEquip();
                        MapStoryManager.quitStory();
                        TasksController.taskCompleteUI();
                        TweenLite.to(conLevel["playerPos"],2.5,{
                           "rotationY":90,
                           "onComplete":function():void
                           {
                              MapStoryManager.pushNextStep();
                              SocketConnection.send(45850,[26,2]);
                           }
                        });
                     });
                  }
               });
            });
         }
         conLevel["PaiTe"].addEventListener(MouseEvent.CLICK,this.PaiTeDialog);
         conLevel["LuoJie"].addEventListener(MouseEvent.CLICK,this.LuoJieDialog);
         conLevel["NiuSi"].addEventListener(MouseEvent.CLICK,this.NiuSiDialog);
         conLevel["Alice"].addEventListener(MouseEvent.CLICK,this.AliceDialog);
         conLevel["PaiTe"].visible = true;
         conLevel["LuoJie"].visible = true;
         conLevel["NiuSi"].visible = true;
         conLevel["Alice"].visible = true;
      }
      
      private function onStoryQuit(param1:* = null) : void
      {
         var _loc2_:Class = null;
         if(!this.isEndStory)
         {
            conLevel["PaiTe"].visible = false;
            conLevel["LuoJie"].visible = false;
            conLevel["NiuSi"].visible = false;
            conLevel["Alice"].visible = false;
         }
         else
         {
            _loc2_ = getDefinitionByName("com.robot.app2.systems.mapObject.MapObjectControl") as Class;
            _loc2_["hideOrShowAllObjects"](false);
         }
      }
      
      private function AliceDialog(param1:*) : void
      {
         var e:* = param1;
         if(e != null)
         {
            MapStoryManager.playerMoveToMc(e.currentTarget,function():void
            {
               if(MapStoryManager.StoryProgress >= 17)
               {
                  MapStoryManager.dialog(165,48,function(param1:int):void
                  {
                  });
               }
            });
         }
      }
      
      private function LuoJieDialog(param1:*) : void
      {
         var e:* = param1;
         if(e != null)
         {
            MapStoryManager.playerMoveToMc(e.currentTarget,function():void
            {
               if(MapStoryManager.StoryProgress >= 17)
               {
                  MapStoryManager.dialog(165,49,function(param1:int):void
                  {
                  });
               }
            });
         }
      }
      
      private function PaiTeDialog(param1:*) : void
      {
         var e:* = param1;
         if(e != null)
         {
            MapStoryManager.playerMoveToMc(e.currentTarget,function():void
            {
               if(MapStoryManager.StoryProgress >= 17)
               {
                  MapStoryManager.dialog(165,50,function(param1:int):void
                  {
                  });
               }
            });
         }
      }
      
      private function NiuSiDialog(param1:*) : void
      {
         var e:* = param1;
         if(e != null)
         {
            MapStoryManager.playerMoveToMc(e.currentTarget,function():void
            {
               if(MapStoryManager.StoryProgress >= 17)
               {
                  MapStoryManager.dialog(165,51,function(param1:int):void
                  {
                  });
               }
            });
         }
      }
   }
}
