package com.robot.app2.mapProcess
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.app2.systems.mapObject.MapObject;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewIconMovieController;
   import com.robot.core.event.PetEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_11661 extends BaseMapProcess
   {
       
      
      private var state:int;
      
      private var hasSetDefalut:Boolean;
      
      public function MapProcess_11661()
      {
         super();
         StatManager.sendStat2014("20180525版本1.0","触发过场动画","2018回流系统");
         MapObjectControl.hideOrShowAllObjects(false);
         MainManager.actorInfo.mapID = 11661;
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         MainManager.actorInfo.mapID = 11661;
         MainManager.actorModel.visible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         KTool.hideMapPlayerAndMonster();
         conLevel.addEventListener(MouseEvent.CLICK,this.onConClick);
         this.playStory();
      }
      
      public function onConClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var name1:String = null;
         var name:String = null;
         var e:MouseEvent = param1;
         index = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn_" + index:
               if(index == 6)
               {
                  MainManager.actorInfo.mapID = 11661;
                  KTool.changeMapWithCallBack(1,function():void
                  {
                  });
               }
               else if(index == 5)
               {
                  ModuleManager.showModule(ClientConfig.getMapModule("WorldMapPanel"),"正在打开...");
               }
               else
               {
                  name = String(["SeerReturn201805MainPanel","SeerReturn201805RecommendPanel","SeerReturn201805ActivityPanel","SeerReturn201805OldPetPanel","WorldMapsub1Panel"][index - 1]);
                  ModuleManager.showAppModule(name);
               }
               break;
            case "icon_" + index:
               name1 = String(["SeerReturn201805MainPanel","SeerReturn201805RecommendPanel","SeerReturn201805OldPetPanel","SeerReturn201805ActivityPanel"][index - 1]);
               ModuleManager.showAppModule(name1);
         }
      }
      
      public function playStory() : void
      {
         KTool.getMultiValue([101547],function(param1:Array):void
         {
            var hasMiniMark:Boolean;
            var hasPet:Boolean;
            var obj:MapObject = null;
            var talks5:PlayTalksAction = null;
            var talks4:PlayTalksAction = null;
            var arr:Array = param1;
            if(conLevel == null)
            {
               return;
            }
            hasMiniMark = KTool.getBit(arr[0],23) == 1;
            hasPet = KTool.getBit(arr[0],22) == 1;
            if(hasMiniMark)
            {
               MovieClip(conLevel).gotoAndStop(4);
               MovieClip(conLevel).addEventListener(Event.FRAME_CONSTRUCTED,function(param1:Event):void
               {
                  MovieClip(param1.currentTarget).removeEventListener(Event.FRAME_CONSTRUCTED,arguments.callee);
                  ToolTipManager.add(conLevel["btn_6"],"传送舱");
                  ToolTipManager.add(conLevel["btn_2"],"推荐精灵阵容");
                  ToolTipManager.add(conLevel["btn_3"],"日常活动推荐");
                  ToolTipManager.add(conLevel["btn_4"],"情怀精灵推荐");
                  ToolTipManager.add(conLevel["btn_5"],"地图");
               });
               obj = MapObjectControl.getMapObjetByName("seerReturnAdIcon");
               obj.visible = true;
               MapObjectControl.hideOrShowAllObjects(true);
               MainManager.actorModel.visible = true;
            }
            else if(hasPet)
            {
               MapObjectControl.hideOrShowAllObjects(false);
               MovieClip(conLevel).gotoAndStop(4);
               if(PetManager.getPetInfo(PetManager.defaultTime).id == 3582 || hasSetDefalut)
               {
                  talks5 = new PlayTalksAction({
                     "name":"talk5",
                     "type":"talks",
                     "value":[[520,"你已经把几米设置为首发精灵了，现在奖励你一些刻印。","好的。"]]
                  });
                  talks5.doAction().then(function():Promise
                  {
                     return SocketConnection.sendWithPromise(47287,[14,2]);
                  }).then(function():Promise
                  {
                     var _loc1_:* = new PlayTalksAction({
                        "name":"talk6",
                        "type":"talks",
                        "value":[[520,"准备工作差不多完成了，刻印是精灵实力的重要提升，建议你把这些刻印装在我身上。接下来，让我们一起踏上征程吧！","我已经迫不及待了。"]]
                     });
                     return _loc1_.doAction();
                  }).then(function():void
                  {
                     ModuleManager.showAppModule("SeerReturn201805MainPanel");
                     playStory();
                  });
               }
               else
               {
                  talks4 = new PlayTalksAction({
                     "name":"talk4",
                     "type":"talks",
                     "value":[[520,"现在，我将成为你的首发精灵！。","好的，现在几米是我的首发精灵了。"]]
                  });
                  talks4.doAction().then(function():void
                  {
                     var petArr:Array = null;
                     var temp:int = 0;
                     var temp1:int = 0;
                     if(PetManager.getPetInfo(PetManager.defaultTime).id == 3582)
                     {
                        hasSetDefalut = true;
                        playStory();
                     }
                     else if((petArr = PetManager.getBagPetsById(3582)) && petArr.length > 0)
                     {
                        PetManager.addEventListener(PetEvent.SET_DEFAULT,function(param1:PetEvent):void
                        {
                           PetManager.removeEventListener(PetEvent.SET_DEFAULT,arguments.callee);
                           hasSetDefalut = true;
                           playStory();
                        });
                        PetManager.setDefault(petArr[0].catchTime);
                     }
                     else if((petArr = PetManager.getBagPetsById(3582,true)) && petArr.length > 0)
                     {
                        temp = int(PetManager.defaultTime);
                        if(temp)
                        {
                           PetManager.addEventListener(PetEvent.STORAGE_ADDED,function(param1:PetEvent):void
                           {
                              var e:PetEvent = param1;
                              PetManager.removeEventListener(PetEvent.STORAGE_ADDED,arguments.callee);
                              PetManager.addEventListener(PetEvent.ADDED,function(param1:PetEvent):void
                              {
                                 var e:PetEvent = param1;
                                 PetManager.removeEventListener(PetEvent.ADDED,arguments.callee);
                                 PetManager.storageToSecondBag(temp);
                                 PetManager.addEventListener(PetEvent.SET_DEFAULT,function(param1:PetEvent):void
                                 {
                                    PetManager.removeEventListener(PetEvent.SET_DEFAULT,arguments.callee);
                                    hasSetDefalut = true;
                                    playStory();
                                 });
                                 PetManager.setDefault(petArr[0].catchTime);
                              });
                              PetManager.secondBagToBag(petArr[0].catchTime);
                           });
                           PetManager.bagToInStorage(temp);
                        }
                        else
                        {
                           PetManager.addEventListener(PetEvent.SET_DEFAULT,function(param1:PetEvent):void
                           {
                              PetManager.removeEventListener(PetEvent.SET_DEFAULT,arguments.callee);
                              hasSetDefalut = true;
                              playStory();
                           });
                           PetManager.setDefault(petArr[0].catchTime);
                        }
                     }
                     else if((petArr = PetManager.getPetsById(3582)) && petArr.length > 0)
                     {
                        temp1 = int(PetManager.defaultTime);
                        if(temp1)
                        {
                           PetManager.addEventListener(PetEvent.STORAGE_ADDED,function(param1:PetEvent):void
                           {
                              var e:PetEvent = param1;
                              PetManager.removeEventListener(PetEvent.STORAGE_ADDED,arguments.callee);
                              PetManager.addEventListener(PetEvent.ADDED,function(param1:PetEvent):void
                              {
                                 var e:PetEvent = param1;
                                 PetManager.removeEventListener(PetEvent.ADDED,arguments.callee);
                                 PetManager.addEventListener(PetEvent.SET_DEFAULT,function(param1:PetEvent):void
                                 {
                                    PetManager.removeEventListener(PetEvent.SET_DEFAULT,arguments.callee);
                                    hasSetDefalut = true;
                                    playStory();
                                 });
                                 PetManager.setDefault(petArr[0].catchTime);
                              });
                              PetManager.storageToInBag(petArr[0].catchTime);
                           });
                           PetManager.bagToInStorage(temp1);
                        }
                        else
                        {
                           PetManager.addEventListener(PetEvent.SET_DEFAULT,function(param1:PetEvent):void
                           {
                              PetManager.removeEventListener(PetEvent.SET_DEFAULT,arguments.callee);
                              hasSetDefalut = true;
                              playStory();
                           });
                           PetManager.setDefault(petArr[0].catchTime);
                        }
                     }
                  });
               }
            }
            else
            {
               MapObjectControl.hideOrShowAllObjects(false);
               AnimateManager.playMcAnimateWithPromis(conLevel as MovieClip,1,"mc").then(function():Promise
               {
                  var _loc1_:* = new PlayTalksAction({
                     "name":"talk1",
                     "type":"talks",
                     "value":[[5,"在你离开的日子里，赛尔号历经了许多变迁，我们仍然在宇宙中不断的与邪恶势力对抗，我们迫切希望像你这样的老兵回归赛尔号，帮助我们对抗邪恶势力！","我已经准备好了，雷蒙教官！"]]
                  });
                  return _loc1_.doAction();
               }).then(function():Promise
               {
                  LevelManager.closeMouseEvent();
                  return AnimateManager.playFullScreenAnimateWithPromise(ClientConfig.getResPath("bounsMovie/SeerReturn201805Full.swf"));
               }).then(function():Promise
               {
                  var deferred:* = undefined;
                  LevelManager.openMouseEvent();
                  if(conLevel)
                  {
                     return AnimateManager.playMcAnimateWithPromis(conLevel as MovieClip,2,"mc");
                  }
                  deferred = new Deferred();
                  setTimeout(function():void
                  {
                     deferred.resolve(true);
                  },100);
                  return deferred.promise;
               }).then(function():Promise
               {
                  var _loc1_:* = new PlayTalksAction({
                     "name":"talk2",
                     "type":"talks",
                     "value":[[520,"恕我直言，以你现在的实力，只不过是个拖后腿的。","你说什么？！"],[520,"就像雷蒙教官之前说的，现在精灵们的实力都发生了翻天覆地的变化，现在的精灵对战，如果还是停留在以前的固有思维中，是很难取胜的。","我不相信，来啊，我们先来比试比试！"]]
                  });
                  return _loc1_.doAction();
               }).then(function():Promise
               {
                  var deferred1:* = undefined;
                  if(conLevel)
                  {
                     return AnimateManager.playMcAnimateWithPromis(conLevel as MovieClip,3,"mc");
                  }
                  deferred1 = new Deferred();
                  setTimeout(function():void
                  {
                     deferred1.resolve(true);
                  },100);
                  return deferred1.promise;
               }).then(function():Promise
               {
                  var _loc1_:* = new PlayTalksAction({
                     "name":"talk3",
                     "type":"talks",
                     "value":[[5,"几米说的没错，现在精灵们的实力确实不可同日而语，而我在此迎接你的目的，就是帮助你提升战斗力的。接下来，我会重新训练你，让你重回巅峰！","既然雷蒙教官也这么说，那我就好好训练！"],[520,"让我来做你的精灵伙伴吧，赛尔！我们可以并肩作战！","好的！"]]
                  });
                  return _loc1_.doAction();
               }).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(47287,[14,1]);
               }).then(playStory);
            }
         });
      }
      
      override public function destroy() : void
      {
         NewIconMovieController.getinstance().addEvent();
         if(conLevel["btn_2"] != null)
         {
            ToolTipManager.remove(conLevel["btn_6"]);
            ToolTipManager.remove(conLevel["btn_2"]);
            ToolTipManager.remove(conLevel["btn_3"]);
            ToolTipManager.remove(conLevel["btn_4"]);
            ToolTipManager.remove(conLevel["btn_5"]);
         }
         LevelManager.iconLevel.visible = true;
         MapObjectControl.hideOrShowAllObjects(true);
         if(conLevel != null)
         {
            conLevel.removeEventListener(MouseEvent.CLICK,this.onConClick);
         }
         MainManager.actorModel.visible = true;
         KTool.showMapPlayerAndMonster();
         super.destroy();
      }
   }
}
