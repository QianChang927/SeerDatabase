package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.loading.Loading;
   import com.robot.core.utils.NumberUtils;
   import flash.display.Bitmap;
   import flash.display.BitmapData;
   import flash.display.BlendMode;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   import gs.TweenLite;
   import org.taomee.manager.CursorManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ChristmasDayActivityController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
      
      private static var canvas:Sprite;
      
      private static var bmd:BitmapData;
      
      private static var bmp:Bitmap;
      
      private static var ctrl:Sprite;
      
      private static var brush:MovieClip;
      
      private static var _timer:Timer;
      
      private static var _currentItem:DisplayObject;
       
      
      public function ChristmasDayActivityController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         SocketConnection.send(1022,86065469);
         MapListenerManager.add(_map.depthLevel["xilindun"],onNpcClick,"希林顿");
         MapListenerManager.add(_map.depthLevel["laikening"],onNpcClick,"莱克宁");
         MapListenerManager.add(_map.depthLevel["ashawen"],onNpcClick,"阿沙文");
         if(!hasFinshPreTask)
         {
            playPreTask();
         }
         showChangeColorItem();
      }
      
      private static function setNpcVisible(param1:Boolean) : void
      {
         if(_currentItem)
         {
            _currentItem.visible = param1;
         }
         _map.depthLevel["ashawen"].visible = _map.depthLevel["xilindun"].visible = _map.depthLevel["laikening"].visible = param1;
      }
      
      private static function get taskState() : Boolean
      {
         return TasksManager.getTaskStatus(1857) == TasksManager.COMPLETE;
      }
      
      private static function get taskState2() : Boolean
      {
         return BufferRecordManager.getMyState(924);
      }
      
      private static function onNpcClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.currentTarget.name)
         {
            case "xilindun":
               NpcDialog.show(NPC.XILINDUN,["想要击败雪夜魔王，就先过我这一关吧！"],["我要挑战你！   ","待会儿再来看看。"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("XiLinDunPanel"));
               }]);
               break;
            case "ashawen":
               NpcDialog.show(NPC.ASHAWEN,["战胜希林顿并不算什么，快来迎接我暗影护法阿沙文的考验吧！战胜我的人才有资格继续挑战雪夜魔王！"],["我要挑战你！","待会儿再来看看"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("AnyinghufaFightPanel"));
               }]);
               break;
            case "laikening":
               NpcDialog.show(NPC.LAIKENING,["战胜希林顿和阿沙文之后，我将在12月20日迎接你的挑战！圣诞节就快到了，你可要抓紧时间了，哈哈哈哈……"],["我会打败你的！"]);
         }
      }
      
      public static function startTask2() : void
      {
         if(!taskState2)
         {
            _map.conLevel.addChild(_taskMc);
            setNpcVisible(false);
            _map.depthLevel.visible = false;
            KTool.hideMapAllPlayerAndMonster();
            SocketConnection.send(1022,86065480);
            AnimateManager.playMcAnimate(_taskMc,6,"mc",function():void
            {
               NpcDialog.show(NPC.KAIKAIXIPU,["孩子，会有圣诞礼物的，每一年圣诞节都会有圣诞礼物，今年也不会例外的。"],["你在骗人！"],[function():void
               {
                  NpcDialog.show(NPC.KAIKAIXIPU,["圣诞老人都没有了，谁会给我们发礼物？呜呜呜呜……"],["圣诞老人还在呢，别着急。"],[function():void
                  {
                     NpcDialog.show(NPC.KAIKAIXIPU,["圣诞老人可是神通广大，什么事情都不会阻止他来给孩子们发圣诞礼物，要相信他哦！"],["是啊，他每年都没有失约。"],[function():void
                     {
                        AnimateManager.playMcAnimate(_taskMc,7,"mc",function():void
                        {
                           NpcDialog.show(NPC.KAIKAIXIPU,["不过圣诞礼物只会奖励给那些听话的孩子，经常哭鼻子的可不是好孩子。"],["哦……那我知道了。"],[function():void
                           {
                              NpcDialog.show(NPC.KAINU,["嗯，那我以后一定做一个听话的好孩子。圣诞节就要到了，今年的圣诞礼物会是什么呢？真是期待呢！"],["礼物不是一定要等到圣诞节哦！"],[function():void
                              {
                                 NpcDialog.show(NPC.KAIKAIXIPU,["如果你真的是个听话的好孩子，每一天都可以得到礼物哦！"],["这是真的吗？"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(_taskMc,8,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.KAIKAIXIPU,["最近的气候变得寒冷异常，而且黑夜变得无比的漫长，今年的冬天实在是太诡异了。"],["一定是雪夜魔王他们搞的鬼。"],[function():void
                                       {
                                          NpcDialog.show(NPC.SEER,["居然连冰系精灵都忍受不了这寒冷，看来不打败雪夜魔王，今年圣诞节恐怕不止是没有礼物这么简单了。"],["哈哈，说得不错。"],[function():void
                                          {
                                             AnimateManager.playMcAnimate(_taskMc,9,"mc",function():void
                                             {
                                                NpcDialog.show(NPC.SEER,["雪夜魔王！你干什么？你抓走了圣诞老人，还不准别人送礼物吗？"],["对，就是这样。"],[function():void
                                                {
                                                   NpcDialog.show(NPC.LAIKENING,["圣诞礼物实在是太愚蠢了，准备好迎接今年的圣诞节吧，只有无尽的寒冷和黑夜会与你们相伴！"],["我们才不要这些东西！"],[function():void
                                                   {
                                                      AnimateManager.playMcAnimate(_taskMc,10,"mc",function():void
                                                      {
                                                         setNpcVisible(true);
                                                         _map.depthLevel.visible = true;
                                                         SocketConnection.send(1022,86065481);
                                                         KTool.showMapAllPlayerAndMonster();
                                                         BufferRecordManager.setMyState(924,true);
                                                         ModuleManager.showModule(ClientConfig.getAppModule("KaiKaiXiGiftBagPanel"));
                                                         DisplayUtil.removeForParent(_taskMc);
                                                      });
                                                   }]);
                                                }]);
                                             });
                                          }]);
                                       }]);
                                    });
                                 }]);
                              }]);
                           }]);
                        });
                     }]);
                  }]);
               }]);
            });
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("KaiKaiXiGiftBagPanel"));
         }
      }
      
      public static function initDraw(param1:DisplayObjectContainer) : void
      {
         var ct:DisplayObjectContainer = param1;
         ResourceManager.getResource(ClientConfig.getAppRes("brush"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            CursorManager.init(LevelManager.root);
            brush = mc;
            brush.scaleX = brush.scaleY = 0.15;
            CursorManager.setCursor(brush);
            CursorManager.bringToFront();
            bmd = new BitmapData(MainManager.getStageWidth(),MainManager.getStageHeight(),true,0);
            bmd.draw(LevelManager.root);
            bmp = new Bitmap(bmd);
            LevelManager.appLevel.addChild(bmp);
            canvas = new Sprite();
            canvas.graphics.lineStyle(25,16711680);
            canvas.graphics.moveTo(MainManager.getStage().mouseX,MainManager.getStage().mouseY);
            MainManager.getStage().addEventListener(MouseEvent.MOUSE_MOVE,onMove);
            TweenLite.to(ct,5,{
               "alpha":0,
               "onComplete":function():void
               {
                  DisplayUtil.removeForParent(ct);
                  destroyCanvas();
               }
            });
         });
      }
      
      public static function destroyCanvas() : void
      {
         CursorManager.destroy();
         DisplayUtil.removeForParent(bmp);
         MainManager.getStage().removeEventListener(MouseEvent.MOUSE_MOVE,onMove);
         canvas = null;
         bmd = null;
         brush = null;
         bmp = null;
      }
      
      private static function onMove(param1:MouseEvent) : void
      {
         canvas.graphics.lineTo(MainManager.getStage().mouseX,MainManager.getStage().mouseY);
         bmd.draw(canvas,null,null,BlendMode.ERASE);
         param1.updateAfterEvent();
      }
      
      private static function onUp(param1:MouseEvent) : void
      {
         CursorManager.destroy();
         MainManager.getStage().removeEventListener(MouseEvent.MOUSE_UP,onUp);
         MainManager.getStage().removeEventListener(MouseEvent.MOUSE_MOVE,onMove);
      }
      
      private static function playPreTask() : void
      {
         var mcloader:MCLoader = null;
         SocketConnection.send(1022,86065759);
         mcloader = new MCLoader(ClientConfig.getMapAnimate("ashawen"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var d1:Array;
            var d2:Array;
            var d3:Array;
            var d4:Array;
            var taskQuePro:TaskQuneProcessor;
            var mapMv:MovieClip = null;
            var e:* = param1;
            mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
            mapMv = mcloader.loader.content["mv"];
            mcloader.clear();
            MapManager.currentMap.controlLevel.addChild(mapMv);
            d1 = [[NPC.XILINDUN,["战神联盟，不要逞英雄了，乖乖地顺从雪夜魔王吧！不然这冷酷的严寒早晚会吞噬你们！"],["装腔作势的家伙！"]],[NPC.LEIYI,["顺从雪夜魔王？想都别想！我们战神联盟，不会让你们破坏了大家期待了一年的圣诞节！"],["还敢逞强？?"]],[NPC.XILINDUN,["那只好让你们吃点苦头，不要继续碍事了！"],["那我们就拭目以待了。"]]];
            d2 = [[NPC.XILINDUN,["怎么会这样，居然可以打破我的冰霜禁锢？！"],["你以为你的冰霜禁锢很厉害吗?"]],[NPC.LEIYI,["难道你忘记了冰是可以导电的，你的冰霜禁锢正好给了我直接攻击你的机会！"],["我居然忘了你是电系的……?"]],[NPC.XILINDUN,["是我大意了……让你们投机取巧成功了……"],["输了还嘴硬！?"]]];
            d3 = [[NPC.ASHAWEN,["希林顿，你可真给我们雪夜军团丢脸，看来只有我来收拾你的烂摊子了！"],["我只是一时大意……"]],[NPC.LEIYI,["看来你就是那个暗影护法吧，无论来多少，在战神联盟面前都只有被打趴下的份儿！"],["打败了希林顿就这么狂妄！"]],[NPC.ASHAWEN,["既然你们这么想念平安夜，那么就提前让你们感受一下无尽的黑夜吧！"],["你觉得我们会怕黑吗？"]]];
            d4 = [[NPC.GAIYA,["糟糕！好像真的什么都看不见了！"],["不止是这样！"]],[NPC.LEIYI,["不是简单的黑夜，所有的感官都受到了影响，最糟糕的是现在还不能移动！"],["哈哈，你们不是说不怕黑吗？"]],[NPC.ASHAWEN,["在我制造的黑夜里，只有我可以洞察一切！一切都只能由我主宰！"],["似乎这个家伙有点厉害。"]]];
            setNpcVisible(false);
            taskQuePro = new TaskQuneProcessor();
            taskQuePro.addMapMv(mapMv,1,"mv");
            taskQuePro.addDialog(d1);
            taskQuePro.addMapMv(mapMv,2,"mv");
            taskQuePro.addDialog(d2);
            taskQuePro.addMapMv(mapMv,3,"mv");
            taskQuePro.addDialog(d3);
            taskQuePro.addMapMv(mapMv,4,"mv");
            taskQuePro.addDialog(d4);
            taskQuePro.addMapMv(mapMv,5,"mv");
            taskQuePro.procesEndFun = function():void
            {
               SocketConnection.send(1022,86065760);
               DisplayUtil.removeForParent(mapMv);
               TasksManager.accept(1862,function():void
               {
                  TasksManager.complete(1862,0);
                  ModuleManager.showModule(ClientConfig.getAppModule("AnyinghufaFightPanel"));
               });
               setNpcVisible(true);
               MapObjectControl.hideOrShowAllObjects(true);
               KTool.showMapAllPlayerAndMonster(true);
            };
            taskQuePro.start();
            KTool.showMapAllPlayerAndMonster(false);
            MainManager.actorModel.visible = false;
            MapObjectControl.hideOrShowAllObjects(false);
         });
         mcloader.doLoad();
      }
      
      public static function get hasFinshPreTask() : Boolean
      {
         return TasksManager.getTaskStatus(1862) == TasksManager.COMPLETE;
      }
      
      public static function get hasFinshAnyingPartyPreTask() : Boolean
      {
         return BufferRecordManager.getMyState(938);
      }
      
      public static function playPartyPreTask() : void
      {
         var mcloader:MCLoader = null;
         mcloader = new MCLoader(ClientConfig.getMapAnimate("anyingparty"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var d1:Array;
            var d2:Array;
            var d3:Array;
            var d4:Array;
            var taskQuePro:TaskQuneProcessor;
            var mapMv:MovieClip = null;
            var e:* = param1;
            mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
            mapMv = mcloader.loader.content["mv"];
            mcloader.clear();
            d1 = [[NPC.DEGELAKE,["你就是雪夜魔王的暗影护法阿沙文吗？"],["看来你听说过我的大名了。"]],[NPC.ASHAWEN,["既然都是暗影系的，为什么要说我坏话呢？干脆和我一起投到雪夜魔王手下，怎么样？"],["白日做梦！"]],[NPC.DEGELAKE,["你们抓走了我们的圣诞老人，还在这里败坏暗影系的名声，我们才不要和你为伍！"],["真是冥顽不灵！"]]];
            d2 = [[NPC.ASHAWEN,["老大，我正在给你找几个暗影系的小弟！"],["我看你是在给自己找小弟吧。?"]],[NPC.LAIKENING,["暗影系那深邃的肤色就像无尽的黑夜，我很喜欢，再说我们确实需要更多簇拥！"],["明白，老大！"]],[NPC.ASHAWEN,["老大，圣诞节那天所有精灵都会拜倒在您膝下的！今天就从这几个暗影系精灵开始！"],["说得不错，哈哈哈哈！"]]];
            d3 = [[NPC.ASHAWEN,["哈哈，老大不愧是老大，果然厉害！"],["小菜一碟！"]],[NPC.LAIKENING,["如果连这几个精灵都搞不定还能叫雪夜魔王么？阿沙文，他们就交给你了。"],["放心吧，我会好好利用他们的！"]]];
            d4 = [[NPC.GAIYA,["糟糕！好像真的什么都看不见了！"],["不止是这样！"]],[NPC.LEIYI,["不是简单的黑夜，所有的感官都受到了影响，最糟糕的是现在还不能移动！"],["哈哈，你们不是说不怕黑吗？"]],[NPC.ASHAWEN,["在我制造的黑夜里，只有我可以洞察一切！一切都只能由我主宰！"],["似乎这个家伙有点厉害。"]]];
            setNpcVisible(false);
            MapManager.currentMap.controlLevel.addChild(mapMv);
            mapMv.gotoAndStop(1);
            taskQuePro = new TaskQuneProcessor();
            taskQuePro.addMapMv(mapMv,1,"mv");
            taskQuePro.addDialog(d1);
            taskQuePro.addMapMv(mapMv,2,"mv");
            taskQuePro.addDialog(d2);
            taskQuePro.addMapMv(mapMv,3,"mv");
            taskQuePro.addDialog(d3);
            taskQuePro.procesEndFun = function():void
            {
               DisplayUtil.removeForParent(mapMv);
               BufferRecordManager.setMyState(938,true,function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("AnyingJinglingPaiduiPanel"));
               });
               setNpcVisible(true);
               MapObjectControl.hideOrShowAllObjects(true);
               KTool.showMapAllPlayerAndMonster(true);
            };
            taskQuePro.start();
            KTool.showMapAllPlayerAndMonster(false);
            MapObjectControl.hideOrShowAllObjects(false);
         });
         mcloader.doLoad();
      }
      
      private static function showChangeColorItem() : void
      {
         _timer = new Timer(1000 * 50);
         _timer.addEventListener(TimerEvent.TIMER,onTimer);
         _timer.start();
         onTimer(null);
      }
      
      private static function onTimer(param1:Event) : void
      {
         var e:Event = param1;
         if(_currentItem == null)
         {
            ResourceManager.getResource(ClientConfig.getResPath("item/petItem/icon/" + 300466 + ".swf"),function(param1:DisplayObject):void
            {
               var _loc2_:int = 0;
               var _loc3_:int = 0;
               var _loc4_:Point = null;
               param1.scaleX = param1.scaleY = 0.8;
               do
               {
                  _loc2_ = Math.floor(NumberUtils.random(30,70)) * 10;
                  _loc3_ = Math.floor(NumberUtils.random(1,45)) * 10;
                  _loc4_ = new Point(_loc2_,_loc3_);
               }
               while(!MapManager.currentMap.isBlock(_loc4_));
               
               MapManager.currentMap.btnLevel.addChild(param1);
               param1.x = _loc2_;
               param1.y = _loc3_;
               _currentItem = param1;
               MapListenerManager.add(_currentItem as InteractiveObject,onChangeItemClick,"雪球变色剂");
            });
         }
      }
      
      private static function onChangeItemClick(param1:MouseEvent) : void
      {
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onWalk);
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,onMapDown);
         MainManager.actorModel.walkAction(new Point(_currentItem.x,_currentItem.y),true);
      }
      
      private static function onMapDown(param1:MapEvent) : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalk);
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,onMapDown);
      }
      
      private static function onWalk(param1:Event) : void
      {
         if(Math.abs(Point.distance(new Point(_currentItem.x,_currentItem.y),MainManager.actorModel.pos)) < 30)
         {
            onMapDown(null);
            MainManager.actorModel.stop();
            SocketConnection.send(CommandID.COMMAND_4548,163,0);
            DisplayUtil.removeForParent(_currentItem);
            _currentItem = null;
            _timer.reset();
            _timer.start();
         }
      }
      
      public static function playXueQiuPreTask() : void
      {
         var taskQuePro:TaskQuneProcessor = null;
         var d1:Array = [[NPC.SEER,["好神奇！小雪球变成雪人了！没想到你们竟然还有这种能力，真是难以置信啊！"],null],[NPC.XIAOXUEQIU,["呵呵！只要圣诞节降临，并且配合变色剂和染色剂的其中一种功效，我们的身体颜色就会有变化，不过颜色并非自己能够控制！"],["凑齐六只就能变成大雪人了吗?"]],[NPC.XIAOXUEQIU,["没错！只要把六只不同颜色的小雪球放入精灵背包，并且身边跟随，就能组合成大雪人的造型！"],["看我的吧！我一定能凑齐！"]]];
         taskQuePro = new TaskQuneProcessor();
         taskQuePro.addFullMv(ClientConfig.getFullMovie("task_963"));
         taskQuePro.addDialog(d1);
         taskQuePro.procesEndFun = function():void
         {
            BufferRecordManager.setMyState(947,true,function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("FiveColorSnowBallDyePanel"));
            });
            taskQuePro.destory();
         };
         taskQuePro.start();
      }
      
      public static function destroy() : void
      {
         _currentItem = null;
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalk);
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,onMapDown);
         if(!_map)
         {
            return;
         }
         _map.depthLevel["xilindun"].removeEventListener(MouseEvent.CLICK,onNpcClick);
         _map.depthLevel["laikening"].removeEventListener(MouseEvent.CLICK,onNpcClick);
         _map = null;
         _taskMc = null;
         _timer.removeEventListener(TimerEvent.TIMER,onTimer);
      }
   }
}
