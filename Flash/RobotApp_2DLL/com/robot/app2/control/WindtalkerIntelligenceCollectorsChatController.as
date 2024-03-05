package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import org.taomee.events.SocketEvent;
   
   public class WindtalkerIntelligenceCollectorsChatController
   {
      
      private static var _lastAnswerIndex:int;
      
      private static var _curAnswerIndex:int;
      
      private static var _chooseIndex:int;
      
      private static var _trustArr:Array = [[2,1,4,3],[2,3,1,4],[2,1,3,4],[3,2,4,1],[4,2,3,1]];
      
      private static var _object:Object = {
         "type":1,
         "addTrust":0
      };
       
      
      public function WindtalkerIntelligenceCollectorsChatController()
      {
         super();
      }
      
      public static function inquiryLast() : void
      {
         KTool.getMultiValue([3522],function(param1:Array):void
         {
            _lastAnswerIndex = param1[0];
            randomAnswerIndex();
         });
      }
      
      public static function randomAnswerIndex() : void
      {
         _curAnswerIndex = int(Math.random() * 5 + 1);
         while(_curAnswerIndex == _lastAnswerIndex)
         {
            _curAnswerIndex = int(Math.random() * 5 + 1);
         }
         startAnswer();
      }
      
      public static function startAnswer() : void
      {
         switch(_curAnswerIndex)
         {
            case 1:
               NpcDialog.show(NPC.COLORFUL_TIGER,["你说你想投靠我？学习无上的格斗之术？"],null,null,true,function():void
               {
                  NpcDialog.show(NPC.WIND_TALKER,["是这样的，请一定要收我为徒！"],null,null,true,function():void
                  {
                     NpcDialog.show(NPC.COLORFUL_TIGER,["那我可要问你一个问题，你可听好了。"],null,null,true,function():void
                     {
                        NpcDialog.show(NPC.WIND_TALKER,["请问。"],null,null,true,function():void
                        {
                           NpcDialog.show(NPC.COLORFUL_TIGER,["组织里有四大头目，分别是“天”，“命”，“难”，“违”，那么其中代号“命”是谁？"],["额....是.....","必然是那缪斯的父亲！","是冥帝修罗！","是谁不重要，碰上您，都是渣渣"],[function():void
                           {
                              _chooseIndex = 1;
                              sendToServer();
                           },function():void
                           {
                              _chooseIndex = 2;
                              sendToServer();
                           },function():void
                           {
                              _chooseIndex = 3;
                              sendToServer();
                           },function():void
                           {
                              _chooseIndex = 4;
                              sendToServer();
                           }],true);
                        });
                     });
                  });
               });
               break;
            case 2:
               NpcDialog.show(NPC.COLORFUL_TIGER,["格斗之术精妙无比，根本不是蛮力可以控制。"],null,null,true,function():void
               {
                  NpcDialog.show(NPC.WIND_TALKER,["我明白，我愿意潜心学习！"],null,null,true,function():void
                  {
                     NpcDialog.show(NPC.COLORFUL_TIGER,["你知道白虎现在如何吗？"],["应该还活着吧","现在他正在准备与组织决战！","似乎......","他对待邪恶的态度，依然是零容忍！"],[function():void
                     {
                        _chooseIndex = 1;
                        sendToServer();
                     },function():void
                     {
                        _chooseIndex = 2;
                        sendToServer();
                     },function():void
                     {
                        _chooseIndex = 3;
                        sendToServer();
                     },function():void
                     {
                        _chooseIndex = 4;
                        sendToServer();
                     }],true);
                  });
               });
               break;
            case 3:
               NpcDialog.show(NPC.COLORFUL_TIGER,["唉，一切都是天意，父亲恐怕都获得了超进化的力量！而我呢！"],null,null,true,function():void
               {
                  NpcDialog.show(NPC.WIND_TALKER,["我可以帮助你获得这种力量！"],null,null,true,function():void
                  {
                     NpcDialog.show(NPC.COLORFUL_TIGER,["你认为，我和我父亲谁更强？"],["当然是您！","半斤八两的样子吧。","你们只是理念不同而已，何来强弱之分","如果你获得了这种力量，你就比他强！"],[function():void
                     {
                        _chooseIndex = 1;
                        sendToServer();
                     },function():void
                     {
                        _chooseIndex = 2;
                        sendToServer();
                     },function():void
                     {
                        _chooseIndex = 3;
                        sendToServer();
                     },function():void
                     {
                        _chooseIndex = 4;
                        sendToServer();
                     }],true);
                  });
               });
               break;
            case 4:
               NpcDialog.show(NPC.COLORFUL_TIGER,["这天下追求极限力量的精灵何止千万，我这力量，到底算如何？"],null,null,true,function():void
               {
                  NpcDialog.show(NPC.WIND_TALKER,["是那要看跟谁做比较了。！"],null,null,true,function():void
                  {
                     NpcDialog.show(NPC.COLORFUL_TIGER,["那你说说看。"],["比盖亚霸气","比瑞尔斯帅气","比组织里任何精灵都强大！","跟自己比，永远都不会满足"],[function():void
                     {
                        _chooseIndex = 1;
                        sendToServer();
                     },function():void
                     {
                        _chooseIndex = 2;
                        sendToServer();
                     },function():void
                     {
                        _chooseIndex = 3;
                        sendToServer();
                     },function():void
                     {
                        _chooseIndex = 4;
                        sendToServer();
                     }],true);
                  });
               });
               break;
            case 5:
               NpcDialog.show(NPC.COLORFUL_TIGER,["也许和组织的对决已经不远了，我已经能闻到危险的气息。"],null,null,true,function():void
               {
                  NpcDialog.show(NPC.WIND_TALKER,["所以您这次回来帮助自己父亲了吗？"],null,null,true,function():void
                  {
                     NpcDialog.show(NPC.COLORFUL_TIGER,["是的。"],null,null,true,function():void
                     {
                        NpcDialog.show(NPC.WIND_TALKER,["可是你们追求不同啊。"],null,null,true,function():void
                        {
                           NpcDialog.show(NPC.COLORFUL_TIGER,["那你觉得到底我这次回来帮他是正确的选择吗？"],["肯定正确！","没这个必要。","既来之，则安之。","要不您现在反悔？"],[function():void
                           {
                              _chooseIndex = 1;
                              sendToServer();
                           },function():void
                           {
                              _chooseIndex = 2;
                              sendToServer();
                           },function():void
                           {
                              _chooseIndex = 3;
                              sendToServer();
                           },function():void
                           {
                              _chooseIndex = 4;
                              sendToServer();
                           }],true);
                        });
                     });
                  });
               });
         }
      }
      
      private static function sendToServer() : void
      {
         SocketConnection.addCmdListener(45520,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(45520,arguments.callee);
            _object.addTrust = _trustArr[_curAnswerIndex - 1][_chooseIndex - 1];
            ModuleManager.showModule(ClientConfig.getAppModule("WindtalkerIntelligenceCollectorsAddTrustPanel"),"正在打开...",_object);
         });
         SocketConnection.send(45520,_curAnswerIndex,_chooseIndex);
      }
      
      public static function destroy() : void
      {
      }
   }
}
