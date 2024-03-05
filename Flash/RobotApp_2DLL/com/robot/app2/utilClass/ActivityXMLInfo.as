package com.robot.app2.utilClass
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.PlayTask;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.TasksOfNewStyleXMLInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import flash.utils.getDefinitionByName;
   import mx.utils.StringUtil;
   
   public class ActivityXMLInfo
   {
       
      
      private var _activityLoader:URLLoader;
      
      private var _activityXML:XML;
      
      private var a:Function = null;
      
      private var arr:Array;
      
      private var _storyXMLList:XMLList;
      
      private var _fightXMLList:XMLList;
      
      private var _jumpXMLList:XMLList;
      
      private var _updateXMLList:XMLList;
      
      private var _awardXMLList:XMLList;
      
      private var _buyXMLList:XMLList;
      
      private var _playTask:PlayTask;
      
      private var _taskMc:MovieClip;
      
      public function ActivityXMLInfo(param1:String = "2015/1113/WholePPAllresistanceOpen.xml", param2:MovieClip = null, param3:Function = null)
      {
         super();
         this._activityLoader = new URLLoader();
         this._activityLoader.addEventListener(Event.COMPLETE,this.loadActivityXML);
         this._activityLoader.load(new URLRequest(ClientConfig.getAppResource(param1,".xml")));
         this._taskMc = param2;
         this.a = param3;
      }
      
      public static function onFight(param1:Object) : void
      {
         FightManager.fightNoMapBoss(param1.name,param1.id,false,true,param1.callback);
         if(param1.fightListener)
         {
            param1.fightListener();
         }
      }
      
      public static function jump(param1:Object) : void
      {
         var url:String = null;
         var analysisList:Array = null;
         var aclass:Class = null;
         var Jobj:Object = param1;
         var type:String = Jobj.type as String;
         url = Jobj.url as String;
         switch(type)
         {
            case "module":
               ModuleManager.showAppModule(url,Jobj.data);
               break;
            case "funcWithController":
               analysisList = url.split(":");
               aclass = getDefinitionByName(String(analysisList[0])) as Class;
               aclass[String(analysisList[1])]();
               break;
            case "map":
               KTool.changeMapWithCallBack(Number(url),function():void
               {
                  if(Jobj.callFun != null)
                  {
                     Jobj.callFun();
                  }
               });
         }
      }
      
      public static function buy(param1:Object) : void
      {
         var obj:Object = param1;
         if(obj.type == "one")
         {
            KTool.buyProductByCallback(obj.productID,1,function():void
            {
               if(obj.exchangeID)
               {
                  KTool.doExchange(obj.exchangeID,obj.callFunction);
               }
               else
               {
                  obj.callFunction();
               }
            });
         }
         if(obj.type == "mul")
         {
            ModuleManager.showAppModule("MultiBuyPanel",obj);
         }
      }
      
      public function assignArr(param1:Array) : void
      {
         if(param1 == null)
         {
            this.arr = new Array();
         }
         else
         {
            this.arr = param1;
         }
      }
      
      protected function loadActivityXML(param1:Event) : void
      {
         this._activityLoader.removeEventListener(Event.COMPLETE,this.loadActivityXML);
         this._activityXML = new XML(param1.target.data);
         this.handleElements();
         if(this.a != null)
         {
            this.a();
         }
      }
      
      public function handleElements() : void
      {
         if(this._activityXML != null)
         {
            this._storyXMLList = new XMLList(this._activityXML.elements.storyGrp);
            this._fightXMLList = new XMLList(this._activityXML.elements.fightGrp);
            this._jumpXMLList = new XMLList(this._activityXML.elements.jumpGrp);
            this._awardXMLList = new XMLList(this._activityXML.elements.awardGrp);
            this._buyXMLList = new XMLList(this._activityXML.elements.buyGrp);
         }
      }
      
      public function playStory(param1:int, param2:Function = null, param3:Function = null, param4:Function = null, param5:Function = null) : void
      {
         var story:Array = null;
         var i:int = param1;
         var cb:Function = param2;
         var cb1:Function = param3;
         var cb2:Function = param4;
         var cb3:Function = param5;
         if(this._playTask == null)
         {
            this._playTask = new PlayTask();
         }
         KTool.hideMapAllPlayerAndMonster();
         MapManager.currentMap.depthLevel.visible = false;
         LevelManager.iconLevel.visible = false;
         MapNamePanel.hide();
         if(cb1 == null)
         {
            story = this.getStory(i);
            this._playTask.addStory(story);
            this._playTask.playStory(function():void
            {
               reverseLevel();
               if(cb != null)
               {
                  cb();
               }
            });
         }
         else
         {
            story = this.getStory(i,[function():void
            {
               if(cb != null)
               {
                  cb();
               }
            },function():void
            {
               reverseLevel();
               if(cb1 != null)
               {
                  cb1();
               }
            },function():void
            {
               reverseLevel();
               if(cb2 != null)
               {
                  cb2();
               }
            },function():void
            {
               reverseLevel();
               if(cb3 != null)
               {
                  cb3();
               }
            }]);
            this._playTask.addStory(story);
            this._playTask.playStory();
         }
      }
      
      public function reverseLevel() : void
      {
         LevelManager.iconLevel.visible = true;
         if(MapManager.currentMap.controlLevel.contains(this._taskMc))
         {
            MapManager.currentMap.controlLevel.removeChild(this._taskMc);
         }
         MapManager.currentMap.depthLevel.visible = true;
         MapNamePanel.show();
         KTool.showMapAllPlayerAndMonster();
      }
      
      public function getStory(param1:int, param2:Array = null) : Array
      {
         var curStoryXML:XML = null;
         var curTaskModXMLList:XMLList = null;
         var storyArray:Array = null;
         var npcId:int = 0;
         var dialogContent:String = null;
         var answer:String = null;
         var answer1:String = null;
         var i:int = 0;
         var taskMod:TaskMod = null;
         var curTaskMod:XML = null;
         var type:int = 0;
         var frame:int = 0;
         var mcName:String = null;
         var fullName:String = null;
         var answerArr:Array = null;
         var handlerArr:Array = null;
         var j:int = 0;
         var storyId:int = param1;
         var fun:Array = param2;
         curStoryXML = new XML(this._storyXMLList..story.(@id == storyId));
         curTaskModXMLList = new XMLList(curStoryXML.elements("taskmod"));
         storyArray = new Array();
         if(curStoryXML == null)
         {
            return storyArray;
         }
         i = 0;
         while(i < curTaskModXMLList.length())
         {
            type = int(curTaskModXMLList[i].@type);
            switch(type)
            {
               case TaskDiaLogManager.DIALOG:
                  npcId = Number(curTaskModXMLList[i].@npcid);
                  if(npcId == 0)
                  {
                     npcId = int(TasksOfNewStyleXMLInfo.getPetId(curTaskModXMLList[i].@npcName));
                  }
                  dialogContent = curTaskModXMLList[i].@dialog;
                  answer = curTaskModXMLList[i].@answer;
                  dialogContent = dialogContent == null ? "" : dialogContent;
                  dialogContent = dialogContent.replace("$nick$",MainManager.actorInfo.formatNick);
                  j = 0;
                  while(this.arr != null && j < this.arr.length)
                  {
                     dialogContent = dialogContent.replace("arr[" + j + "]",this.arr[j]);
                     j++;
                  }
                  taskMod = new TaskMod(type,npcId,[dialogContent],answer == null || answer.length <= 0 ? null : [answer]);
                  break;
               case TaskDiaLogManager.MAP_MOVIE:
                  MapManager.currentMap.controlLevel.addChild(this._taskMc);
                  frame = Number(curTaskModXMLList[i].@frame);
                  mcName = curTaskModXMLList[i].@mcname;
                  mcName = mcName == null ? "" : mcName;
                  taskMod = new TaskMod(type,0,null,null,[this._taskMc,frame,mcName]);
                  break;
               case TaskDiaLogManager.FUL_MOVIE:
                  fullName = curTaskModXMLList[i].@swfname;
                  fullName = fullName == null ? "" : fullName;
                  taskMod = new TaskMod(type,0,null,null,[fullName,true]);
                  break;
               case TaskDiaLogManager.MULTI_ANSWER_DIALOG:
                  npcId = Number(curTaskModXMLList[i].@npcid);
                  if(npcId == 0)
                  {
                     npcId = int(TasksOfNewStyleXMLInfo.getPetId(curTaskModXMLList[i].@npcName));
                  }
                  dialogContent = curTaskModXMLList[i].@dialog;
                  answer = curTaskModXMLList[i].@answer;
                  dialogContent = dialogContent == null ? "" : dialogContent;
                  dialogContent = dialogContent.replace("$nick$",MainManager.actorInfo.formatNick);
                  j = 0;
                  while(this.arr != null && j < this.arr.length)
                  {
                     dialogContent = dialogContent.replace("arr[" + j + "]",this.arr[j]);
                     j++;
                  }
                  answer = answer == null ? "" : answer;
                  answerArr = new Array();
                  answer = String(StringUtil.trim(answer));
                  answerArr = answer.split("|");
                  handlerArr = new Array();
                  j = 0;
                  while(j < answerArr.length)
                  {
                     handlerArr.push(fun[j]);
                     j++;
                  }
                  taskMod = new TaskMod(type,npcId,[dialogContent],answerArr,null,handlerArr);
                  break;
            }
            if(taskMod != null)
            {
               taskMod.isNewDialog_1 = true;
               storyArray.push(taskMod);
            }
            i++;
         }
         return storyArray;
      }
      
      public function goFight(param1:int, param2:Function = null, param3:int = 1) : void
      {
         var _loc4_:XMLList;
         var _loc5_:String = (_loc4_ = new XMLList(this._fightXMLList.fight[param3].boss))[param1].@name;
         var _loc6_:int = int(_loc4_[param1].@id);
         FightManager.fightNoMapBoss(_loc5_,_loc6_,false,true,param2);
      }
      
      public function goJump(param1:int, ... rest) : void
      {
         var url:String = null;
         var analysisList:Array = null;
         var aclass:Class = null;
         var i:int = param1;
         var paras:Array = rest;
         var jumpXMLList:XMLList = new XMLList(this._jumpXMLList.jump[0].skip);
         var type:String = jumpXMLList[i].@type;
         url = jumpXMLList[i].@name;
         switch(type)
         {
            case "module":
               ModuleManager.showAppModule(url,paras);
               break;
            case "funcWithController":
               analysisList = url.split(":");
               aclass = getDefinitionByName(String(analysisList[0])) as Class;
               aclass[String(analysisList[1])]();
               break;
            case "map":
               KTool.changeMapWithCallBack(Number(url),function():void
               {
               });
         }
      }
   }
}
